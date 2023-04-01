package com.ssafy.ilbok.config;

import com.ssafy.ilbok.jwt.CustomAuthenticationEntryPoint;
import com.ssafy.ilbok.jwt.JwtRequestFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOriginPattern("*");
        config.addAllowedHeader("*"); //(1)
        config.addExposedHeader("*"); //(2)
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .httpBasic().disable()
                .formLogin().disable()
                .addFilter(corsFilter());

        http.authorizeRequests()
                .antMatchers("localhost:3000"+"/main/**")
                .authenticated()
                .anyRequest().permitAll()

                .and()
                //(1)
                .exceptionHandling()
                .authenticationEntryPoint(new CustomAuthenticationEntryPoint());

        //(2)
        http.addFilterBefore(new JwtRequestFilter(), UsernamePasswordAuthenticationFilter.class);
    }

}


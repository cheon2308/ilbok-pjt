package com.ssafy.e202.ilbok.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;

@OpenAPIDefinition(
        info = @Info(title = "일복 API 명세서", version = "v1")
)
@Configuration
@EnableWebMvc
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi  swaggerInfo() {
        String[] paths = {"/v1/**"};
        return GroupedOpenApi.builder()
                .group("추천서비스 API v1")
                .pathsToMatch(paths)
                .build();
    }
}

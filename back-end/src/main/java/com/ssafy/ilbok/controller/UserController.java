package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.jwt.JwtProperties;
import com.ssafy.ilbok.model.dto.OauthToken;
import com.ssafy.ilbok.model.entity.User;
import com.ssafy.ilbok.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService; //(2)

    // 프론트에서 인가코드 받아오는 url
    @GetMapping("/oauth") // (3)
    public ResponseEntity getLogin(@RequestParam("code") String code) { //(4)
        // 넘어온 인가 코드를 통해 access_token 발급 //(5)
        OauthToken oauthToken = userService.getAccessToken(code);

        String jwtToken = userService.saveUserAndGetToken(oauthToken.getAccess_token());
        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        System.out.println(ResponseEntity.ok().headers(headers).body("success"));

        return ResponseEntity.ok().headers(headers).body("success");

    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request) { //(1)

        //(2)
        User user = userService.getUser(request);

        //(3)
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/logout")
    public String logOut(String token) { //(1)
        userService.logOut(token);
        return "Redirect://";
    }


//
}

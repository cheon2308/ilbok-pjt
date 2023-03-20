package com.ssafy.e202.ilbok.controller;

import com.ssafy.e202.ilbok.model.dto.OauthToken;
import com.ssafy.e202.ilbok.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@ComponentScan
@RestController //(1)
@RequestMapping()
public class UserController {

    @Autowired
    private UserService userService; //(2)

    // 프론트에서 인가코드 받아오는 url
    @GetMapping("/oauth") // (3)
    public void getLogin() { //(4)
        System.out.println("현재 코드");

        // 넘어온 인가 코드를 통해 access_token 발급 //(5)
//        OauthToken oauthToken = userService.getAccessToken(code);

//        return oauthToken;
    }

}
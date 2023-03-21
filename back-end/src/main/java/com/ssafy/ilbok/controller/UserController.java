package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.model.dto.OauthToken;
import com.ssafy.ilbok.model.entity.User;
import com.ssafy.ilbok.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController //(1)
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService; //(2)

    // 프론트에서 인가코드 받아오는 url
    @GetMapping("/oauth") // (3)
    public User getLogin(@RequestParam("code") String code) { //(4)
        // 넘어온 인가 코드를 통해 access_token 발급 //(5)
        OauthToken oauthToken = userService.getAccessToken(code);

        User user = userService.saveUser(oauthToken.getAccess_token());

//        System.out.println(oauthToken);
        System.out.println(user);
        return user;
    }
<<<<<<< HEAD:back-server/src/main/java/com/ssafy/e202/ilbok/controller/UserController.java
//
}
=======

}

>>>>>>> develop:back-end/src/main/java/com/ssafy/ilbok/controller/UserController.java

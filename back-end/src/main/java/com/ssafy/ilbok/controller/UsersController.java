package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.jwt.JwtProperties;
import com.ssafy.ilbok.model.dto.OauthToken;
import com.ssafy.ilbok.model.entity.Users;
import com.ssafy.ilbok.service.UsersService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("users/")
public class UsersController {

    private UsersService usersService;

    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @PostMapping(value = "getOne")
    public ResponseEntity<Users> getOne(Long user_id){
        return new ResponseEntity<>(usersService.findByUserId(user_id), HttpStatus.ACCEPTED);
    }

    @GetMapping("/oauth") // (3)
    public ResponseEntity getLogin(@RequestParam("code") String code) { //(4)
        // 넘어온 인가 코드를 통해 access_token 발급 //(5)
        OauthToken oauthToken = usersService.getAccessToken(code);

        String jwtToken = usersService.saveUserAndGetToken(oauthToken.getAccess_token());
        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        System.out.println(ResponseEntity.ok().headers(headers).body("success"));

        return ResponseEntity.ok().headers(headers).body("success");

    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request) { //(1)

        //(2)
        Users user = usersService.getUser(request);

        //(3)
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/logout")
    public String logOut(String token) { //(1)
        usersService.logOut(token);
        return "Redirect://";
    }





}

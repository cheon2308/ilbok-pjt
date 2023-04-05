package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.jwt.JwtProperties;
import com.ssafy.ilbok.model.dto.CurrCareerDto;
import com.ssafy.ilbok.model.dto.OauthToken;
import com.ssafy.ilbok.model.dto.ResumeDto;
import com.ssafy.ilbok.model.entity.Careers;
import com.ssafy.ilbok.model.entity.Users;
import com.ssafy.ilbok.service.UsersService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin("*")
@Controller
@RequestMapping("users/")
public class UsersController {

    private UsersService usersService;

    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @PostMapping(value = "getOne")
    public ResponseEntity<Users> getOne(@RequestParam Long user_id){
        return new ResponseEntity<>(usersService.findByUserId(user_id), HttpStatus.ACCEPTED);
    }

    @GetMapping("oauth") // (3)
    public ResponseEntity getLogin(@RequestParam("code") String code) { //(4)
        // 넘어온 인가 코드를 통해 access_token 발급 //(5)
        OauthToken oauthToken = usersService.getAccessToken(code);


        String jwtToken = usersService.saveUserAndGetToken(oauthToken.getAccess_token());

        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);

        return ResponseEntity.ok().headers(headers).body("success");

    }

    @GetMapping("me")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request) { //(1)

        Users user = usersService.getUser(request);

        return ResponseEntity.ok().body(user);
    }

    @GetMapping("logout")
    public String logOut(String token) { //(1)
        usersService.logOut(token);
        return "Redirect://";
    }

    // 이력서 입력 받고 그걸 기준으로 users 정보 수정하는 api
    @PutMapping("update")
    public ResponseEntity<Users> updateUsersResume(@RequestBody ResumeDto resumeDto){
        usersService.updateUsers(resumeDto);

        Users users = usersService.findByUserId(resumeDto.getUserId());
        System.out.println(users);

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://ilbokd.duckdns.org/userdata/update/"+users.getUserId();
        restTemplate.getForEntity(url, Boolean.class);

        return new ResponseEntity<>(users, HttpStatus.ACCEPTED);
    }

    @PostMapping("getCareers")
    public ResponseEntity<List<CurrCareerDto>> getCareers(@RequestParam Long user_id){
        return new ResponseEntity<>(usersService.getMyCareers(user_id),HttpStatus.ACCEPTED);
    }


}

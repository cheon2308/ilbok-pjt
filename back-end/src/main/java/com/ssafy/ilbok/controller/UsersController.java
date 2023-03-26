package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.model.entity.Users;
import com.ssafy.ilbok.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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





}

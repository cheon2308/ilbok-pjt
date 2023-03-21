package com.ssafy.e202.ilbok.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/oauth")
public class OauthController {

    @GetMapping
    public String handleGetRequest() {
        return "Hello, world!";
    }
}
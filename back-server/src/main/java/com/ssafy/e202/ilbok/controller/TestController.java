package com.ssafy.e202.ilbok.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/hello")
    @Operation(summary = "테스트")
    public void sayHello(){
        System.out.println("hello");
    }
}

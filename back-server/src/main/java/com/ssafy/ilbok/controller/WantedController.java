package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.model.entity.Wanted;
import com.ssafy.ilbok.service.WantedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@Controller
@RequestMapping(value = "wanted/")
public class WantedController {

    private WantedService wantedService;
    @Autowired
    public WantedController(WantedService wantedService){
        this.wantedService = wantedService;
    }

    @GetMapping(value = "getOne")
    public ResponseEntity<Wanted> getOneWanted(@RequestParam int wanted_code){
        return new ResponseEntity<>(wantedService.findByCode(wanted_code), HttpStatus.ACCEPTED);
    }


}

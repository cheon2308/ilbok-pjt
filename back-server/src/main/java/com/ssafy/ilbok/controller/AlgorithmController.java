package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.model.entity.Wanted;
import com.ssafy.ilbok.service.UsersService;
import com.ssafy.ilbok.service.WantedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@Controller
@RequestMapping("algorithm/")
public class AlgorithmController {

    private UsersService usersService;
    private WantedService wantedService;

    @Autowired
    public AlgorithmController(WantedService wantedService, UsersService usersService){
        this.usersService = usersService;
        this.wantedService = wantedService;
    }

    @GetMapping("SimilarJobs")
    public ResponseEntity<List<Wanted>> SimilarJobs(@RequestParam int wantedCode){

        return new ResponseEntity<>(wantedService.findSimilarJobs(wantedCode), HttpStatus.ACCEPTED);
    }
}

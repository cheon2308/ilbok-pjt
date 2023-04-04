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

    //공고 클릭 시 → 유사한 공고
    @PostMapping("similarJobs")
    public ResponseEntity<List<Wanted>> SimilarJobs(@RequestParam int wantedCode){
        return new ResponseEntity<>(wantedService.findSimilarJobs(wantedCode), HttpStatus.ACCEPTED);
    }

    //- 유저가 좋아할만한 공고 200개 (이미 본 공고 포함)
    @PostMapping("likely")
    public ResponseEntity<List<Wanted>> BeLikelyTo(@RequestParam int userId){
        return new ResponseEntity<>(usersService.findBeLikelyTo(userId), HttpStatus.ACCEPTED);
    }

    //일자리 페이지 접속시 나와 비슷한 유저들이 젤 관심있어하는 공고
    @PostMapping("otherLike")
    public ResponseEntity<List<Wanted>> otherLike(@RequestParam int userId){
        return new ResponseEntity<>(usersService.findOtherLike(userId), HttpStatus.ACCEPTED);
    }



}

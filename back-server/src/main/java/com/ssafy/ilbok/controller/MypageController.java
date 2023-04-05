package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.model.dto.UserRelateDto;
import com.ssafy.ilbok.model.entity.Wanted;
import com.ssafy.ilbok.service.ApplyService;
import com.ssafy.ilbok.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin("*")
@Controller
@RequestMapping("myPage/")
public class MypageController {

    private ApplyService applyService;
    private LikeService likeService;

    @Autowired
    public MypageController(ApplyService applyService, LikeService likeService){
        this.applyService = applyService;
        this.likeService = likeService;
    }

    @GetMapping("getUsersApply")
    public ResponseEntity<List<UserRelateDto>> getUserApply(@RequestParam Long user_id){
        return new ResponseEntity<>(applyService.findApplyStatusByUsers(user_id), HttpStatus.ACCEPTED);
    }

    @GetMapping("getUsersLike")
    public ResponseEntity<List<UserRelateDto>> getUserLikes(@RequestParam Long user_id){
        return new ResponseEntity<>(likeService.findLikeWantedByUsers(user_id), HttpStatus.ACCEPTED);
    }

    @GetMapping("getUsersLikeWanted")
    public ResponseEntity<List<Wanted>> getUserLikeWanted(@RequestParam Long user_id){
        return new ResponseEntity<>(likeService.findLikeWanted(user_id), HttpStatus.ACCEPTED);
    }

}
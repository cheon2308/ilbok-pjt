package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.Repository.ApplyRepository;
import com.ssafy.ilbok.model.dto.UserRelateDto;
import com.ssafy.ilbok.model.entity.Wanted;
import com.ssafy.ilbok.service.ApplyService;
import com.ssafy.ilbok.service.ClickWantedService;
import com.ssafy.ilbok.service.LikeService;
import com.ssafy.ilbok.service.WantedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
    private ClickWantedService clickWantedService;
    private LikeService likeService;
    private ApplyService applyService;

    @Autowired
    public WantedController(WantedService wantedService, LikeService likeService,
                            ClickWantedService clickWantedService, ApplyService applyService){
        this.wantedService = wantedService;
        this.likeService = likeService;
        this.clickWantedService = clickWantedService;
        this.applyService = applyService;
    }

    @PostMapping(value = "clicked")
    public void clicked(@RequestBody UserRelateDto userRelateDto){
        clickWantedService.clickWantedPut(userRelateDto);
    }

    @PostMapping(value = "clickLike")
    public void clickLiked(@RequestBody UserRelateDto userRelateDto){
        likeService.clickLiked(userRelateDto);
    }

    @PostMapping(value="clickApply")
    public void clickApply(@RequestBody UserRelateDto userRelateDto){
        applyService.clickApply(userRelateDto);
    }

    @GetMapping(value = "getAll")
    public ResponseEntity<Page<Wanted>> getAllWanted(@RequestParam int offset){
        return new ResponseEntity<>(wantedService.findAll(offset), HttpStatus.ACCEPTED);
    }

}

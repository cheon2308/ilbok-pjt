package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.Repository.ApplyRepository;
import com.ssafy.ilbok.model.dto.SearchJob;
import com.ssafy.ilbok.model.dto.UserRelateDto;
import com.ssafy.ilbok.model.entity.LikeWanted;
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

import java.util.List;

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
    public ResponseEntity<Boolean> clicked(@RequestBody UserRelateDto userRelateDto){
        try{
            clickWantedService.clickWantedPut(userRelateDto);
            return new ResponseEntity<>(Boolean.TRUE, HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(Boolean.FALSE, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping(value = "clickLike")
    public ResponseEntity<Boolean> clickLiked(@RequestBody UserRelateDto userRelateDto){
        try{
            likeService.clickLiked(userRelateDto);

            LikeWanted likeWanted = likeService.isLiked(userRelateDto);
            if(likeWanted==null){
                return new ResponseEntity<>(Boolean.FALSE, HttpStatus.ACCEPTED);
            }else{
                return new ResponseEntity<>(Boolean.TRUE, HttpStatus.ACCEPTED);
            }
            
        }catch (Exception e){
            return new ResponseEntity<>(Boolean.FALSE, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping(value="clickApply")
    public ResponseEntity<Boolean> clickApply(@RequestBody UserRelateDto userRelateDto){
        try{
            applyService.clickApply(userRelateDto);
            return new ResponseEntity<>(Boolean.TRUE, HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(Boolean.FALSE, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping(value="isLiked")
    public ResponseEntity<Boolean> isLiked(@RequestBody UserRelateDto userRelateDto){
        try{
            LikeWanted likeWanted = likeService.isLiked(userRelateDto);
            if(likeWanted==null){
                return new ResponseEntity<>(Boolean.FALSE, HttpStatus.ACCEPTED);
            }else{
                return new ResponseEntity<>(Boolean.TRUE, HttpStatus.ACCEPTED);
            }
        }catch (Exception e){
            return new ResponseEntity<>(Boolean.FALSE, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping(value = "getAll")
    public ResponseEntity<Page<Wanted>> getAllWanted(@RequestParam int offset){
        return new ResponseEntity<>(wantedService.findAll(offset), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "getOne")
    public ResponseEntity<Wanted> getOne(@RequestParam int wanted_code){
        return new ResponseEntity<>(wantedService.findByCode(wanted_code), HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "search")
    public ResponseEntity<List<Wanted>>search(@RequestBody SearchJob searchJob){
        return new ResponseEntity<>(wantedService.SearchKeyword(searchJob),HttpStatus.OK);
    }

}

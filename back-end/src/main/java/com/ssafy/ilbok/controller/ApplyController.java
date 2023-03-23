package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.model.dto.ApplyDto;
import com.ssafy.ilbok.model.entity.ApplyStatus;
import com.ssafy.ilbok.model.entity.Wanted;
import com.ssafy.ilbok.service.ApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("apply/")
public class ApplyController {

    private ApplyService applyService;

    @Autowired
    public ApplyController(ApplyService applyService){this.applyService = applyService;}

    @GetMapping("getAll")
    public ResponseEntity<List<ApplyDto>> getAllApply(){
        return new ResponseEntity<>(applyService.findAll(), HttpStatus.ACCEPTED);
    }



}

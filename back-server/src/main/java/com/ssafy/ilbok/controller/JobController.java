package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.model.entity.JobFamily;
import com.ssafy.ilbok.model.entity.JobSubFamily;
import com.ssafy.ilbok.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/job")
public class  JobController {

    private JobService jobService;

    @Autowired
    public JobController(JobService jobService){
        this.jobService = jobService;
    }

    //대분류 싹 불러오기
    @GetMapping(value = "/MainCategory")
    public ResponseEntity<List<JobFamily>> findAll(){
        return new ResponseEntity<>(jobService.findAll(), HttpStatus.ACCEPTED);
    }

    //대분류 코드에 맞는 중분류 불러오기
    @GetMapping(value = "/MiddleCategory/{code}")
    public List<JobSubFamily> findJobSubFamilyByCode(@PathVariable Integer code){

        return jobService.findJobSubFamilyByCode(code);
    }

    @PostMapping(value = "/insert/careers")
    public void insertCareers(@RequestParam HashMap<String, Integer> map){
        jobService.insertCareers(map);
    }

}

package com.ssafy.ilbok.controller;

import com.ssafy.ilbok.model.entity.*;
import com.ssafy.ilbok.service.CityService;
import com.ssafy.ilbok.service.JobService;
import com.ssafy.ilbok.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
@CrossOrigin("*")
@Controller
@RequestMapping("resume/")
public class ResumeController {
    private JobService jobService;
    private RegionService regionService;
    private CityService cityService;

    @Autowired
    public ResumeController(JobService jobService, RegionService regionService, CityService cityService){
        this.jobService = jobService;
        this.regionService = regionService;
        this.cityService = cityService;
    }

    @GetMapping(value = "regions")
    public ResponseEntity<List<Regions>> getAllRegions(){
        return new ResponseEntity<>(regionService.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "cities")
    public ResponseEntity<List<Cities>> getCities(@RequestParam int region_code){
        return new ResponseEntity<>(cityService.getCityCode(region_code), HttpStatus.ACCEPTED);
    }

    @GetMapping("jobFamily")
    public ResponseEntity<List<JobFamily>> getJobFamily(){
        return new ResponseEntity<>(jobService.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("jobSubFamily")
    public ResponseEntity<List<JobSubFamily>> getJobFamily(@RequestParam int job_family_code){
        return new ResponseEntity<>(jobService.findJobSubFamilyByCode(job_family_code), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "jobs")
    public ResponseEntity<List<Jobs>> getJobs(@RequestParam int job_sub_code){
        return new ResponseEntity<>(jobService.findJobsByJobSubCode(job_sub_code),HttpStatus.ACCEPTED);
    }


}
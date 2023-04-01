package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.*;
import com.ssafy.ilbok.model.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    private JobFamilyRepository jobFamilyRepository;
    private JobSubFamilyRepository jobSubFamilyRepository;
    private CareersRepository careersRepository;
    private UsersRepository usersRepository;
    private JobCategoryRepository jobCategoryRepository;
    private JobsRepository jobsRepository;

    @Autowired
    public JobService(JobFamilyRepository jobFamilyRepository,JobSubFamilyRepository jobSubFamilyRepository,
                      CareersRepository careersRepository,UsersRepository usersRepository,
                      JobCategoryRepository jobCategoryRepository,
                      JobsRepository jobsRepository){
        this.jobFamilyRepository = jobFamilyRepository;
        this.jobSubFamilyRepository = jobSubFamilyRepository;
        this.careersRepository = careersRepository;
        this.usersRepository = usersRepository;
        this.jobCategoryRepository = jobCategoryRepository;
        this.jobsRepository = jobsRepository;
    }

    public List<JobFamily> findAll() {
        return jobFamilyRepository.findAll();
    }

    public List<JobSubFamily> findJobSubFamilyByCode(Integer code) {
        return jobSubFamilyRepository.findByJobSubCode(code);
    }

    public void insertCareers(HashMap<String, Integer> map) {
//        Users users = usersRepository.findByUserId(map.get("userId")).get();
    }

    public List<Jobs> findJobsByJobSubCode(int jobSubCode) {

        List<JobCategory> jobCategory = jobCategoryRepository.findByJobSubCode(jobSubCode);
        List<Jobs> jobs = new ArrayList<>();
        for(JobCategory value : jobCategory){
            jobs.add(jobsRepository.findById(value.getJobCode()).get());
        }

        return jobs;
    }
}

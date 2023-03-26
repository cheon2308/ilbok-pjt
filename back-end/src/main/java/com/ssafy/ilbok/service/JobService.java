package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.*;
import com.ssafy.ilbok.model.entity.JobFamily;
import com.ssafy.ilbok.model.entity.JobSubFamily;
import com.ssafy.ilbok.model.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class JobService {

    private JobFamilyRepository jobFamilyRepository;
    private JobSubFamilyRepository jobSubFamilyRepository;
    private CareersRepository careersRepository;
    private UsersRepository usersRepository;

    @Autowired
    public JobService(JobFamilyRepository jobFamilyRepository,JobSubFamilyRepository jobSubFamilyRepository,
                      CareersRepository careersRepository,UsersRepository usersRepository){
        this.jobFamilyRepository = jobFamilyRepository;
        this.jobSubFamilyRepository = jobSubFamilyRepository;
        this.careersRepository = careersRepository;
        this.usersRepository = usersRepository;
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
}

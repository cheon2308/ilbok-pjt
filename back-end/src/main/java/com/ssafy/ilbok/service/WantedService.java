package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.WantedRepository;
import com.ssafy.ilbok.model.entity.Wanted;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WantedService {

    private WantedRepository wantedRepository;

    public WantedService(WantedRepository wantedRepository){
        this.wantedRepository = wantedRepository;
    }
    public Wanted findByCode(int wantedCode){
        return wantedRepository.findByWantedCode(wantedCode);
    }
}

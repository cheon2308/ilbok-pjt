package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.WantedRepository;
import com.ssafy.ilbok.model.entity.Wanted;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WantedService {

    private WantedRepository wantedRepository;

    public WantedService(WantedRepository wantedRepository){
        this.wantedRepository = wantedRepository;
    }
    public Wanted findByCode(int wantedCode){
        return wantedRepository.findByWantedCode(wantedCode);
    }

    public Page<Wanted> findAll(int offset){
        Pageable pageable = PageRequest.of(offset,10, Sort.by("wantedCode").ascending());
        return wantedRepository.findAll(pageable);
    }
}

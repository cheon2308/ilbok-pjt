package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.RegionsRepository;
import com.ssafy.ilbok.model.entity.Regions;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionService {
    private RegionsRepository regionsRepository;

    public RegionService(RegionsRepository regionsRepository){
        this.regionsRepository = regionsRepository;
    }

    public List<Regions> findAll(){
        return regionsRepository.findAll();
    }

}

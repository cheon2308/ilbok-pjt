package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.CitiesRepository;
import com.ssafy.ilbok.model.entity.Cities;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    private CitiesRepository citiesRepository;

    public CityService(CitiesRepository citiesRepository){
        this.citiesRepository = citiesRepository;
    }

    public List<Cities> getCityCode(int code){
        return citiesRepository.findByRegionCode(code);
    }

}

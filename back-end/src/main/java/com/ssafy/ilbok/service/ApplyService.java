package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.ApplyRepository;
import com.ssafy.ilbok.model.dto.ApplyDto;
import com.ssafy.ilbok.model.entity.ApplyStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApplyService {

    private ApplyRepository applyRepository;

    public ApplyService(ApplyRepository applyRepository){
        this.applyRepository = applyRepository;
    }
    public List<ApplyDto> findAll(){
        List<ApplyDto> list = new ArrayList<>();

        for(ApplyStatus applyStatus : applyRepository.findAll()) {
            ApplyDto applyDto = new ApplyDto();

            applyDto.code = applyStatus.getCode();
            applyDto.userId = applyStatus.getUsers().getUserId();
            applyDto.wantedCode = applyStatus.getWanted().getWantedCode();

            list.add(applyDto);
        }

        return list;
    }
}

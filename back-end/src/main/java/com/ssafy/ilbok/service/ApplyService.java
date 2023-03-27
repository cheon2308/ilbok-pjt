package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.ApplyRepository;
import com.ssafy.ilbok.Repository.UsersRepository;
import com.ssafy.ilbok.model.dto.UserRelateDto;
import com.ssafy.ilbok.model.entity.ApplyStatus;
import com.ssafy.ilbok.model.entity.Users;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApplyService {

    private ApplyRepository applyRepository;
    private UsersRepository usersRepository;

    public ApplyService(ApplyRepository applyRepository, UsersRepository usersRepository){
        this.applyRepository = applyRepository;
        this.usersRepository = usersRepository;
    }

    public List<UserRelateDto> findApplyStatusByUsers(Long user_id){
        Users users = usersRepository.findByUserId(user_id);

        List<UserRelateDto> list = new ArrayList<>();

        for(ApplyStatus applyStatus : applyRepository.findApplyStatusByUsers(users)) {
            UserRelateDto applyDto = new UserRelateDto();

            applyDto.code = applyStatus.getCode();
            applyDto.userId = applyStatus.getUsers().getUserId();
            applyDto.wantedCode = applyStatus.getWanted().getWantedCode();

            list.add(applyDto);
        }

        return list;
    }



}

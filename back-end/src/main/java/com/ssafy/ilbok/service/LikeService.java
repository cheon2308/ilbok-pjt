package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.ApplyRepository;
import com.ssafy.ilbok.Repository.LikeRepository;
import com.ssafy.ilbok.Repository.UsersRepository;
import com.ssafy.ilbok.model.dto.UserRelateDto;
import com.ssafy.ilbok.model.entity.ApplyStatus;
import com.ssafy.ilbok.model.entity.LikeWanted;
import com.ssafy.ilbok.model.entity.Users;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LikeService {

    private LikeRepository likeRepository;
    private UsersRepository usersRepository;

    public LikeService(LikeRepository likeRepository, UsersRepository usersRepository){
        this.likeRepository = likeRepository;
        this.usersRepository = usersRepository;
    }

    public List<UserRelateDto> findLikeWantedByUsers(Long user_id){
        Users users = usersRepository.findByUserId(user_id);

        List<UserRelateDto> list = new ArrayList<>();

        for(LikeWanted likeWanted : likeRepository.findLikeWantedByUsers(users)) {
            UserRelateDto applyDto = new UserRelateDto();

            applyDto.code = likeWanted.getCode();
            applyDto.userId = likeWanted.getUsers().getUserId();
            applyDto.wantedCode = likeWanted.getWanted().getWantedCode();

            list.add(applyDto);
        }

        return list;
    }



}

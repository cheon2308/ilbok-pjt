package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.ApplyRepository;
import com.ssafy.ilbok.Repository.LikeRepository;
import com.ssafy.ilbok.Repository.UsersRepository;
import com.ssafy.ilbok.Repository.WantedRepository;
import com.ssafy.ilbok.model.dto.UserRelateDto;
import com.ssafy.ilbok.model.entity.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LikeService {

    private LikeRepository likeRepository;
    private UsersRepository usersRepository;
    private WantedRepository wantedRepository;

    public LikeService(LikeRepository likeRepository, UsersRepository usersRepository, WantedRepository wantedRepository){
        this.likeRepository = likeRepository;
        this.usersRepository = usersRepository;
        this.wantedRepository = wantedRepository;
    }

    public List<UserRelateDto> findLikeWantedByUsers(Long user_id){
        Users users = usersRepository.findByUserId(user_id);

        List<UserRelateDto> list = new ArrayList<>();

        for(LikeWanted likeWanted : likeRepository.findLikeWantedByUsers(users)) {
            UserRelateDto applyDto = new UserRelateDto();

            applyDto.code = likeWanted.getCode();
            applyDto.userId = likeWanted.getUsers().getUserId();
            applyDto.wantedCode = likeWanted.getWantedCode().getWantedCode();

            list.add(applyDto);
        }

        return list;
    }

    public void clickLiked(UserRelateDto dto){

        LikeWanted likeWanted;
        Users users = usersRepository.findByUserId(dto.getUserId());
        Wanted wanted = wantedRepository.findByWantedCode(dto.getWantedCode());

        likeWanted = likeRepository.findByUsersAndWantedCode(users, wanted);

        // 이미 있다면 삭제하고 없다면 넣어준다.
        if(likeWanted != null){
            likeRepository.delete(likeWanted);
        }
        else{
            likeWanted = new LikeWanted();
            likeWanted.setWantedCode(wanted);
            likeWanted.setUsers(users);
            likeRepository.save(likeWanted);
        }
    }

    public LikeWanted isLiked(UserRelateDto userRelateDto){

        Users users = usersRepository.findByUserId(userRelateDto.getUserId());
        Wanted wanted = wantedRepository.findByWantedCode(userRelateDto.getWantedCode());

        return likeRepository.findByUsersAndWantedCode(users, wanted);
    }

    public List<Wanted> findLikeWanted(Long user_id){

        Users users = usersRepository.findByUserId(user_id);

        List<Integer> list = new ArrayList<>();

        for(LikeWanted likeWanted : likeRepository.findLikeWantedByUsers(users)) {
            list.add(likeWanted.getWantedCode().getWantedCode());
        }

        return wantedRepository.findAllById(list);
    }

}

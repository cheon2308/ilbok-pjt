package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.ClickWantedRepository;
import com.ssafy.ilbok.Repository.UsersRepository;
import com.ssafy.ilbok.Repository.WantedRepository;
import com.ssafy.ilbok.model.dto.UserRelateDto;
import com.ssafy.ilbok.model.entity.ClickWanted;
import com.ssafy.ilbok.model.entity.Users;
import com.ssafy.ilbok.model.entity.Wanted;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClickWantedService {
    private ClickWantedRepository clickWantedRepository;
    private UsersRepository usersRepository;
    private WantedRepository wantedRepository;

    @Autowired
    public ClickWantedService(ClickWantedRepository clickWantedRepository, UsersRepository usersRepository, WantedRepository wantedRepository){
        this.clickWantedRepository = clickWantedRepository;
        this.usersRepository = usersRepository;
        this.wantedRepository = wantedRepository;
    }

    public void clickWantedPut(UserRelateDto dto){
        ClickWanted clickWanted = new ClickWanted();
        Users users = usersRepository.findByUserId(dto.getUserId());
        Wanted wanted = wantedRepository.findByWantedCode(dto.getWantedCode());
        clickWanted.setWantedCode(wanted);
        clickWanted.setUsers(users);
        clickWantedRepository.save(clickWanted);
    }

}

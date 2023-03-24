package com.ssafy.ilbok.service;

import com.ssafy.ilbok.Repository.UserRepository;
import com.ssafy.ilbok.Repository.UsersRepository;
import com.ssafy.ilbok.controller.UsersController;
import com.ssafy.ilbok.model.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService {

    private UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    public Users findByUserId(Long user_id){
        return usersRepository.findByUserId(user_id);
    }
}

package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    public Users findByEmail(String email);

    public Users findByUserId(Long userId);


}

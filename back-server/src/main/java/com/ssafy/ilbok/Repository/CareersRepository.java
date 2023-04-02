package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.Careers;
import com.ssafy.ilbok.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareersRepository extends JpaRepository<Careers,Long> {

    void deleteByUserId(Users users);

}

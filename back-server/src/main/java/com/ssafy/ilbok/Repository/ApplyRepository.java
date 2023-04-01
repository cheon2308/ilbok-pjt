package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.ApplyStatus;
import com.ssafy.ilbok.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplyRepository extends JpaRepository<ApplyStatus, Long> {

    List<ApplyStatus> findAll();
    List<ApplyStatus> findApplyStatusByUsers(Users users);

}

package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.ApplyStatus;
import com.ssafy.ilbok.model.entity.LikeWanted;
import com.ssafy.ilbok.model.entity.Users;
import com.ssafy.ilbok.model.entity.Wanted;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeRepository extends JpaRepository<LikeWanted, Long> {
    List<LikeWanted> findLikeWantedByUsers(Users users);

    LikeWanted findByUsersAndWantedCode(Users users, Wanted wanted);
}

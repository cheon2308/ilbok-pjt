package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobsRepository extends JpaRepository<Jobs, Integer> {

}

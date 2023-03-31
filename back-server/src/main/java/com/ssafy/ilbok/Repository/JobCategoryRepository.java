package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.JobCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobCategoryRepository extends JpaRepository<JobCategory,Integer> {

    List<JobCategory> findByJobSubCode(int jobSubCode);
}

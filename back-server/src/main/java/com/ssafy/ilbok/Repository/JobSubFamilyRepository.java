package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.JobSubFamily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobSubFamilyRepository extends JpaRepository<JobSubFamily, Integer> {

    @Query("select subJob from JobSubFamily subJob where subJob.jobFamilyCode=:code")
    List<JobSubFamily> findByJobSubCode(Integer code);
}

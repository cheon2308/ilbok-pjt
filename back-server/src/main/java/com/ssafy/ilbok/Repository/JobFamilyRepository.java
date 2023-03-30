package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.JobFamily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobFamilyRepository extends JpaRepository<JobFamily,Integer> {

}

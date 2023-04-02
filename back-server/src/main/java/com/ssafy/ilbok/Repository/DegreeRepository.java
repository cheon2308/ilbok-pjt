package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.Degrees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DegreeRepository extends JpaRepository<Degrees, Integer> {

}

package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.ClickWanted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClickWantedRepository extends JpaRepository<ClickWanted, Long> {

}

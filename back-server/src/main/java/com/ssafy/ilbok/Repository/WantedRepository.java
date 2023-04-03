package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.Wanted;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WantedRepository extends JpaRepository<Wanted, Integer> {
    public Wanted findByWantedCode(int wantedCode);

    Page<Wanted> findAll(Pageable pageable);

}

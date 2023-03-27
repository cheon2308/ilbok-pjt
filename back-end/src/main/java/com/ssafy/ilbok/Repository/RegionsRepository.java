package com.ssafy.ilbok.Repository;

import com.ssafy.ilbok.model.entity.Regions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionsRepository extends JpaRepository<Regions, Integer> {
    List<Regions> findAll();
}
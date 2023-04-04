package com.ssafy.ilbok.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
public class Jobs {

    @Id @Column(name = "job_code")
    private Integer Code;

    private String name;

}

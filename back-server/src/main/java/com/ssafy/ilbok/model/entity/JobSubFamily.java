package com.ssafy.ilbok.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "job_sub_family")
public class JobSubFamily {

    @Id
    @Column(name = "job_sub_code")
    private int jobSubCode;

    @Column(name = "job_family_code")
    private int jobFamilyCode;

    private String name;

}

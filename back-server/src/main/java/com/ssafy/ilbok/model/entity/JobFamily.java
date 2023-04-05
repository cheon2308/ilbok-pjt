package com.ssafy.ilbok.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
public class JobFamily {

    @Id
    @Column(name = "job_family_code")
    private Integer jobFamilyCode;

    private String name;

}

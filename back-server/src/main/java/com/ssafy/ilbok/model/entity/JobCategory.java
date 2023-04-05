package com.ssafy.ilbok.model.entity;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
public class JobCategory {

    @Id
    private Integer code;

    @Column(name = "job_code")
    private Integer jobCode;

    @Column(name = "job_sub_code")
    private Integer jobSubCode;

}

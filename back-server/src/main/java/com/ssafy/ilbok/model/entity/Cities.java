package com.ssafy.ilbok.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
public class Cities {

    @Id
    @Column(name = "city_code")
    private Integer cityCode;

    @Column(name = "region_code")
    private Integer regionCode;

    private String city;

}

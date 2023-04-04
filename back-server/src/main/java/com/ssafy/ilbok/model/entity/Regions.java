package com.ssafy.ilbok.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name = "regions")
public class Regions {
    @Id
    @Column(name = "region_code")
    private Integer regionCode;

    @Column(name="region")
    private String  region;
}

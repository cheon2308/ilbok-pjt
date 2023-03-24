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
@Table(name = "careers")
public class Careers {

    @Id
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "sub_code")
    private int subCode;

    private int period;
}

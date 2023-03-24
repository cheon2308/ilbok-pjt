package com.ssafy.ilbok.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@Entity
public class ClickWanted {

    @Id
    private Long code;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "wanted_code")
    private int wantedCode;

}

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
@Table(name = "apply_status")
public class Like_wanted {

    @Id
    private Long code;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "wanted_code")
    private int wantedCode;

}

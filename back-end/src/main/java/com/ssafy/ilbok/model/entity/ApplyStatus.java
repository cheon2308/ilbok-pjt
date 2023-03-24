package com.ssafy.ilbok.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "apply_status")
public class ApplyStatus {
    @Id
    @Column(name = "code")
    private Long code;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;

    @ManyToOne
    @JoinColumn(name="wanted_code")
    private Wanted wanted;

}

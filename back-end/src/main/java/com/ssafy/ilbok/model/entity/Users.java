package com.ssafy.ilbok.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@CrossOrigin("*")
@NoArgsConstructor
@Entity
@Data
@Table(name = "users")
public class Users {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "user_id")
    private Long userId;

    @Column(name = "kakao_id")
    private Long kakaoId;

    @Column(name = "user_role")
    private String userRole;

    @Column( name = "degree_code")
    private int degreeCode;

    @Column( name = "city_code" )
    private int cityCode;

    @Column(name="favorite")
    private int favorite;

    @Column(name = "email")
    private String email;

    @Column(name="nickname")
    private String nickname;

    @Column(name = "age")
    private int age;

    @Column(name = "gender")
    private int gender;

    @Column(name = "profile_image")
    private String profileImage;

    @OneToMany(mappedBy = "users")
    @JsonIgnore
    private List<ApplyStatus> applyStatuses;

    @Builder
    public Users(Long userId, Long kakaoId, String userRole, int degreeCode,
                 int cityCode, int favorite, String email, String nickname,
                 int age, int gender, String profileImage) {
        this.userId = userId;
        this.kakaoId = kakaoId;
        this.userRole = userRole;
        this.degreeCode = degreeCode;
        this.cityCode = cityCode;
        this.favorite = favorite;
        this.email = email;
        this.nickname = nickname;
        this.age = age;
        this.gender = gender;
        this.profileImage = profileImage;
    }
}

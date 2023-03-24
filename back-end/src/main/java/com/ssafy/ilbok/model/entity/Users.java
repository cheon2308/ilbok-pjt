package com.ssafy.ilbok.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Entity
@Data
@Table(name = "users")
public class Users {
    @Id
    @Column( name = "user_id")
    private Long userId;

    @Column( name = "degree_code")
    private int degreeCode;

    @Column( name = "city_code" )
    private int cityCode;

    @Column(name="favorite")
    private int favorite;

    @Column(name = "kakao_id")
    private Long kakaoId;

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
    public Users(Long user_id, int degree_code, int city_code, int favorite, Long kakao_id,
                 String email, String nickname, int age, int gender, String profile_image){
        this.userId = user_id;
        this.degreeCode = degree_code;
        this.cityCode = city_code;
        this.favorite = favorite;
        this.kakaoId = kakao_id;
        this.email = email;
        this.nickname = nickname;
        this.age = age;
        this.gender = gender;
        this.profileImage = profile_image;
    }

}

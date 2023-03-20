package com.ssafy.e202.ilbok.model.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.security.Timestamp;
@Entity
@Data
@NoArgsConstructor
@Table(name = "user_master") //(1)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //(2)
    @Column(name = "user_code") //(3)
    private Long userCode;

    @Column(name = "kakao_id")
    private Long kakaoId;

    @Column(name = "kakao_profile_img")
    private String kakaoProfileImg;

    @Column(name = "kakao_nickname")
    private String kakaoNickname;

    @Column(name = "kakao_email")
    private String kakaoEmail;

    @Column(name = "user_role")
    private String userRole;

//    @Column(name = "create_time")
//    @CreationTimestamp //(4)
//    private Timestamp createTime;

    @Builder
    public User(Long kakaoId, String kakaoProfileImg, String kakaoNickname,
                String kakaoEmail, String userRole) {

        this.kakaoId = kakaoId;
        this.kakaoProfileImg = kakaoProfileImg;
        this.kakaoNickname = kakaoNickname;
        this.kakaoEmail = kakaoEmail;
        this.userRole = userRole;
    }

}

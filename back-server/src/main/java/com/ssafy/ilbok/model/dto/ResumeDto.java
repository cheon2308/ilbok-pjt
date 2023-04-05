package com.ssafy.ilbok.model.dto;

import com.ssafy.ilbok.model.entity.Careers;
import lombok.Data;

import java.util.List;

@Data
public class ResumeDto {

    Long userId;

    int degreeCode;

    int cityCode;

    int favorite;

    int age;

    int gender;

    List<Careers> careers;

}

package com.ssafy.ilbok.model.dto;

import lombok.Data;

@Data
public class SearchJob {
    Integer city_code;
    Integer job_code;
    Integer degree_code;
    String career;
    String keyword;
}

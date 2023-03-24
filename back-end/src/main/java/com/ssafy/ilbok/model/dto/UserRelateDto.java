package com.ssafy.ilbok.model.dto;

import lombok.Data;

@Data
public class UserRelateDto {
    public Long code;
    public Long userId;
    public int wantedCode;
}

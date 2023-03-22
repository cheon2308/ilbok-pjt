package com.ssafy.ilbok.jwt;

public interface JwtProperties { //(1)인터페이스 내에 정의되는 필드는 자동으로 public static final이 붙는다.
    String SECRET = "{}"; //(2)JWT 의 Signatuer 를 해싱할 때 사용되는 비밀 키이다. 영어로 원하는 단어를 적어주면 된다.
    int EXPIRATION_TIME =  8640000/4; //(3)토큰의 만료 기간이다. 초단위로 계산된다.
    //// 해당 프로젝트에서는 리프레시 토큰을 사용하지 않기 때문에 길게(10일) 설정해줬다.
    String TOKEN_PREFIX = "Bearer "; //(4)토큰 앞에 붙는 정해진 형식이다. 꼭 Bearer 뒤에 한 칸 공백을 넣어줘야 한다.
    String HEADER_STRING = "Authorization"; //(5)헤더의 Authorization 이라는 항목에 토큰을 넣어줄 것이다.
}
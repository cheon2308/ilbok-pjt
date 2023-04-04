package com.ssafy.ilbok.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.ilbok.Repository.*;
import com.ssafy.ilbok.jwt.JwtProperties;
import com.ssafy.ilbok.model.dto.CurrCareerDto;
import com.ssafy.ilbok.model.dto.KakaoProfile;
import com.ssafy.ilbok.model.dto.OauthToken;
import com.ssafy.ilbok.model.dto.ResumeDto;
import com.ssafy.ilbok.model.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.StringTokenizer;

@Service
public class UsersService {


    private UsersRepository usersRepository;
    private CitiesRepository citiesRepository;
    private JobSubFamilyRepository jobSubFamilyRepository;

    private CareersRepository careersRepository;

    private WantedRepository wantedRepository;

    private DegreeRepository degreeRepository;

    public UsersService(UsersRepository usersRepository, CitiesRepository citiesRepository, WantedRepository wantedRepository,
                        JobSubFamilyRepository jobSubFamilyRepository, DegreeRepository degreeRepository, CareersRepository careersRepository){
        this.jobSubFamilyRepository = jobSubFamilyRepository;
        this.citiesRepository =citiesRepository;
        this.usersRepository = usersRepository;
        this.wantedRepository = wantedRepository;
        this.degreeRepository = degreeRepository;
        this.careersRepository = careersRepository;
    }

    public Users findByUserId(Long user_id){
        return usersRepository.findByUserId(user_id);
    }

    public Users getUser(HttpServletRequest request) {

        Long userId = (Long) request.getAttribute("userCode");

        Users users = usersRepository.findByUserId(userId);

        //(4)
        return users;
    }




    public OauthToken getAccessToken(String code) {

        //(2)
        RestTemplate rt = new RestTemplate();

        //(3)
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        //(4)
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", "fb9737b606aa1abe22c3b71a9e42b209");
        params.add("redirect_uri", "https://ilbokf.duckdns.org/oauth");
        params.add("code", code);

        //(5)
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);

        //(6)
        ResponseEntity<String> accessTokenResponse = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );


        //(7)
        ObjectMapper objectMapper = new ObjectMapper();
        OauthToken oauthToken = null;
        try {
            oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OauthToken.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        System.out.println("나");
        System.out.println(oauthToken);

        return oauthToken; //(8)
    }



    public String saveUserAndGetToken(String token) { //(1)
        KakaoProfile profile = findProfile(token);

        Users user = usersRepository.findByEmail(profile.getKakao_account().getEmail());
        if(user == null) {

            System.out.println("시발 여기까지 된다");
            user = Users.builder()
                    .kakaoId(profile.getId())
                    .profileImage(profile.getKakao_account().getProfile().getProfile_image_url())
                    .nickname(profile.getKakao_account().getProfile().getNickname())
                    .email(profile.getKakao_account().getEmail())
                    .userRole("ROLE_USER").build();

            usersRepository.save(user);
        }

        return createToken(user); //(2)
    }


    public KakaoProfile findProfile(String token) {

        RestTemplate rt = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token); //(1-4)
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(headers);

        // Http 요청 (POST 방식) 후, response 변수에 응답을 받음
        ResponseEntity<String> kakaoProfileResponse = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        System.out.println(kakaoProfileResponse.getBody());

        ObjectMapper objectMapper = new ObjectMapper();
        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper.readValue(kakaoProfileResponse.getBody(), KakaoProfile.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return kakaoProfile;
    }

    public String createToken(Users user) {

        String jwtToken = JWT.create()

                .withSubject(user.getEmail())
                .withExpiresAt(new Date(System.currentTimeMillis()+ JwtProperties.EXPIRATION_TIME))

                .withClaim("id", user.getUserId())
                .withClaim("nickname", user.getNickname())

                .sign(Algorithm.HMAC512(JwtProperties.SECRET));

        return jwtToken;
    }

    public void logOut(String token) {

        RestTemplate rt = new RestTemplate();

        //(1-3)
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token); //(1-4)
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        //(1-5)
        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(headers);

        //(1-6)
        // Http 요청 (POST 방식) 후, response 변수에 응답을 받음
        ResponseEntity<String> kakaoProfileResponse = rt.exchange(
                "https://kapi.kakao.com/v1/user/logout",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );
    }

    // 내 경력들 가져오는 서비스
    public List<CurrCareerDto> getMyCareers(Long user_id){
        Users users = usersRepository.findByUserId(user_id);
        List<Careers> list = careersRepository.findAllByUserId(users);
        List<CurrCareerDto> result = new ArrayList<>();

        for(int i=0; i< list.size(); i++){
            int subCode = list.get(i).getSubCode();
            int period = list.get(i).getPeriod();
            CurrCareerDto currCareerDto = new CurrCareerDto();
            currCareerDto.setSubCode(subCode);
            currCareerDto.setPeriod(period);
            result.add(currCareerDto);
        }

        return result;
    }

    // 이력서 페이지에서 입력된 값으로 사용자 정보 업데이트하는 서비스
    @Transactional
    public Users updateUsers(ResumeDto resumeDto){

        Users users = usersRepository.findByUserId(resumeDto.getUserId());
        JobSubFamily jobSubFamily = jobSubFamilyRepository.findById(resumeDto.getFavorite()).get();
        Cities cities = citiesRepository.findById(resumeDto.getCityCode()).get();
        Degrees degrees = degreeRepository.findById(resumeDto.getDegreeCode()).get();
        users.setFavorite(jobSubFamily);
        users.setCity(cities);
        users.setAge(resumeDto.getAge());
        users.setGender(resumeDto.getGender());
        users.setDegreeCode(degrees);

        // 리스트가 있다면
        if(resumeDto.getCareers() != null && resumeDto.getCareers().size()>0){

            careersRepository.deleteByUserId(users);

            List<Careers> careersList = new ArrayList<>();

            for(int i=0; i<resumeDto.getCareers().size(); i++){
                Careers careers = new Careers();
                careers.setUserId(users);

                int sub_code = resumeDto.getCareers().get(i).getSubCode();
                int period = resumeDto.getCareers().get(i).getPeriod();

                careers.setSubCode(sub_code);
                careers.setPeriod(period);

                careersList.add(careers);
            }

            careersRepository.saveAll(careersList);
        }

        usersRepository.save(users);

        return usersRepository.findByUserId(resumeDto.getUserId());
    }


    public List<Wanted> findBeLikelyTo(int userId) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://ilbokd.duckdns.org/userdata/als/"+userId;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        String responseBody = response.getBody();

        String tmp = responseBody.substring(1, responseBody.length()-1);
        StringTokenizer st = new StringTokenizer(tmp, ",");

        List<Wanted> list = new ArrayList<>();

        for(int i=0; i<10; i++){
            String value = st.nextToken();
            int tmpCode = Integer.parseInt(value);
            Wanted wanted = wantedRepository.findByWantedCode(tmpCode);
            list.add(wanted);
        }

        return list;
    }

    public List<Wanted> findOtherLike(int userId) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://ilbokd.duckdns.org/userdata/cf/"+userId;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        String responseBody = response.getBody();
        System.out.println(responseBody);

        String tmp = responseBody.substring(1, responseBody.length()-1);
        StringTokenizer st = new StringTokenizer(tmp, ",");

        List<Wanted> list = new ArrayList<>();

        for(int i=10; i<20; i++){
            String value = st.nextToken();
            int tmpCode = Integer.parseInt(value);
            Wanted wanted = wantedRepository.findByWantedCode(tmpCode);
            list.add(wanted);
        }

        return list;
    }
}

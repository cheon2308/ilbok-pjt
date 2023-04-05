package com.ssafy.ilbok.service;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ilbok.Repository.WantedRepository;
import com.ssafy.ilbok.model.dto.SearchJob;
import com.ssafy.ilbok.model.entity.QWanted;
import com.ssafy.ilbok.model.entity.Wanted;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

@Service
public class WantedService {

    @Autowired
    EntityManager em;

    private WantedRepository wantedRepository;
    public WantedService(WantedRepository wantedRepository){
        this.wantedRepository = wantedRepository;
    }
    public Wanted findByCode(int wantedCode){
        return wantedRepository.findByWantedCode(wantedCode);
    }

    public Page<Wanted> findAll(int offset){
        Pageable pageable = PageRequest.of(offset,10, Sort.by("wantedCode").ascending());
        return wantedRepository.findAll(pageable);
    }

    public List<Wanted> SearchKeyword(SearchJob searchJob) {

        QWanted wanted = new QWanted("w");

        BooleanBuilder builder = new BooleanBuilder();
        if(searchJob.getCity_code()!=null)builder.and(wanted.cityCode.eq(searchJob.getCity_code()));
        if(searchJob.getJob_code()!=null)builder.and(wanted.jobCode.eq(searchJob.getJob_code()));
        if(searchJob.getDegree_code()!=null)builder.and(wanted.degreeCode.degreeId.eq(searchJob.getDegree_code()));
        if(searchJob.getCareer()!=null)builder.and(wanted.career.eq(searchJob.getCareer()));
        if(searchJob.getKeyword()!=null)builder.and(wanted.title.contains(searchJob.getKeyword()));

        JPAQueryFactory query= new JPAQueryFactory(em);

        return query.selectFrom(wanted).where(builder).fetch();
    }

    public List<Wanted> findSimilarJobs(int wantedCode) {

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://ilbokd.duckdns.org/jobdata/"+wantedCode;

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

        System.out.println(list.size());

        return list;
    }
}

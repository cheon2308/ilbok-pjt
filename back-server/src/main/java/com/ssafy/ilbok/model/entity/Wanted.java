package com.ssafy.ilbok.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "wanted")
public class Wanted {
    @Id
    @Column(name = "wanted_code")
    private int wantedCode;

    @ManyToOne
    @JoinColumn(name = "degree_code")
    private Degrees degreeCode;

    @Column(name = "city_code")
    private Integer cityCode;

    @Column(name = "job_code")
    private Integer jobCode;

    @Column(name = "wanted_no")
    private String wantedNo;

    @Column(name = "company")
    private String company;

    @Column(name = "title")
    private String title;

    @Column(name = "salary_type")
    private String salaryType;

    @Column(name = "salary")
    private String salary;

    @Column(name = "working_day")
    private String workingDay;

    @Column(name = "career")
    private String career;

    @Column(name = "reg_date")
    private String regDate;

    @Column(name = "close_date")
    private String closeDate;

    @Column(name = "wanted_info_url")
    private String wantedInfoUrl;

    @Column(name = "reper_name")
    private String reperName;

    @Column(name = "corp_business")
    private String corpBusiness;

    @Column(name = "corp_business_cont")
    private String corpBusinessCont;

    @Column(name = "corp_homepage")
    private String corpHomepage;

    @Column(name = "corp_size")
    private String corpSize;

    @Column(name = "total_emp")
    private int totalEmp;

    @Column(name = "year_sales")
    private int yearSales;

    @Column(name = "corp_addr")
    private String corpAddr;

    @Column(name = "job_name")
    private String jobName;

    @Column(name = "emp_type")
    private String empType;

    @Column(name = "apply_num")
    private int applyNum;

    @Column(name = "job_cont")
    private String jobCont;

    @Column(name = "language_cert")
    private String languageCert;

    @Column(name = "major")
    private String major;

    @Column(name = "certificate")
    private String certificate;

    @Column(name = "prefer")
    private String prefer;

    @Column(name = "emp_process")
    private String empProcess;

    @Column(name = "apply_method")
    private String applyMethod;

    @Column(name = "document")
    private String document;

    @Column(name = "work_region")
    private String work_region;

    @Column(name = "work_time")
    private String workTime;

    @Column(name = "insurance")
    private String insurance;

    @Column(name = "retirepay")
    private String retirepay;

    @Column(name = "etc_welfare")
    private String etc_welfare;

    @Column(name = "disable_con")
    private String disableCon;

}

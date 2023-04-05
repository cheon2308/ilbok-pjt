## 일복

- 나이가 많으신 어르신들의 구직 및 복지를 위한 플랫폼

---

## 2.27

#### 주 내용

- 아이디어 기획 회의 - 1차
- 개인 별 아이디어 찾아본 후 의견 나눔
  - 냉장고의 재료로 만들 수 있는 음식 추천 (냉.부)
  - 취준생의 기술 스택을 바탕으로 관심 뉴스 추천
  - 해외 여행 추천
- 위 3개에 대해 피드백
  - 데이터를 어떤 기준으로 input을 어떻게 줄건지 ?
  - 특히 뉴스의 경우 실시간성을 어떻게 해결할지.
  - 데이터 긁어와서 전처리를 해주어야 한다.
  - 파이프라인을 그려보기

#### 배운 점

- 레프가 많아서 추천이 좋아보이지만, 차별성을 두기가 어려웠습니다.
- 기존의 데이터가 아닌 새로운 데이터 및 페르소나를 그려보는 것 또한 중요하다고 느꼈습니다. 기존 데이터를 사용한다면, 존재하는 컬럼에 맞춰서 할 수 밖에 없기 때문!!
- 주제 및 기능 선정시 -> 예외처리, 추천 알고리즘에 대해 많은 공부가 필요할 것 같습니다.
- 유사도 판단을 위해 INPUT , OUTPUT 을 모두 고려해주는 것이 기획의 시작이라고 생각합니다.
  - 정작 아이디어를 내고 보니 어떤 데이터를 주고 어떤 데이터를 받을지를 생각하지 않았었습니다.
  - 결국, OUTPUT을 따져보니 첫 생각과는 많이 다르다는 것을 알 수 있었습니다.
- 첫 날부터 많은 것을 알게 되었다.

---

## 02.28

#### 주 내용

- 개인별 주제 더 생각해와서 발표
  - 소비 습관 기반 상품 추천
  - 카페 API 활용 추천
  - 특허 기반 관심 분야 회사 추천
  - 도서 추천
  - 취약 계층 정책 / 구인 / 복지 추천
  - - 어제 2가지
- 마찬가지로 컨설턴트님께 피드백
  - 데이터는 만들 수 있으므로, **아웃풋**을 생각해보자!!
  - 즉, 내가 잘 알거나, 학습이 되어있어야 한다.
    - 따라서, 금융 상품의 경우 전문가 수준이 되어야 신뢰성 있는 추천이 된다.
  - 또한, 인풋을 주었을 때 받는 아웃풋으로 어떤 걸 할 수 있는지를 생각해야된다.
  - 어떤 알고리즘을 사용할건지 생각해봐라. -> 가짜 데이터 만들기

#### 배운 점

- 블로그 등을 크롤링 한 후 -> 전처리 -> 스키마를 짜는 FLOW를 알 수 잇었습니다.
- 어떤 값을 input으로 사용할지 잘 정하고, 해당 output을 기준으로 CB, CF 알고리즘을 사용하면 될 것 같습니다.
- 아직 빅데이터 도메인에 대해 지식이 많이 부족하여 학습을 열심히 할 필요가 있을 것 같습니다. 특히 어떤 모델을 선택할지, 피드백을 선택할지를 선택하기 위해 기획을 열심히 할 필요가 있다는 것을 알 수 있었습니다.
- 기획을 확실히 하여야 나중에 우리가 편하고 완성도도 높다 !!

---

## 03.01

- 삼일절

---

## 03.02

- 코딩테스트로 인한 공가

---

## 03.03

#### 주 내용

- 현업자 멘토링 위한 질문 정리
- 데이터 수집
  - 복지와 구인 공고
- 오픈 API 요청 거절 및 새로운 데이터 찾기
- 복지와 구인 중 어느 것에 비중을 둘지 토의를 진행하며 전체적인 큰 틀 찾아가는 중

#### 깨달은 점

- 데이터를 수집하는 것을 많은 레프를 통해 진행하며 우리의 입맛에 맞게 수집 및 가공이 필요하다는 것을 다시 확인했습니다.
- 현업자 분께 질문할 리스트를 정리하며 우리가 필요한 것, 궁금한 것을 정리하는 과정에서
  - 아직 도메인 지식이 많이 부족해 질 나쁜 질문밖에 생각나지 않았습니다.
  - 추가적인 학습을 통해 잘 정리하여 좋은 결과를 얻어야 될 것 같습니다.

---

## 03.06

#### 주 내용

- 오전, 오후 모두 회의 진행
- 유저 FLOW를 그리며 전체 기능들에 대한 각자의 생각을 MERGE 하는 과정을 가졌음
- 추천 알고리즘에 어떤 COLUMN들을 사용할지 고민해봄
- 레프할 사이트들을 정리하며 CBF 컬럼 정리
- 복지에 알고리즘을 적용할지 말지 고민
- 피그마 진행

#### 깨달은 점

- 프로젝트의 내용 및 방향성을 팀 구성원들 모두 통일시키는 과정이 꼭 필요하다고 생각하였습니다.
- 추천 알고리즘을 공부하며 어떤 COLUMN 들이 유의미하고 어떻게 가중치를 줘야되는지 각자 의견을 나누며 발전하고 있습니다.
- 피그마를 잘 다져놓으면서 진행하니 서로 이해하는거도 빠르고 대화의 진행이 매끄럽다는 것을 느꼈습니다.
- 프로젝트의 볼륨을 우리의 목적에 맞게 잘 설정하는 것이 중요하다!!

---

## 03.07

#### 주 내용

- 수집한 복지 및 고용 데이터의 컬럼을 확인 및 알고리즘에 대해 회의
- 레퍼 코드를 참고하며 어떤 식으로 알고리즘이 동작하는지, 어떤 컬럼이 필요한지를 분석하며 일복 프로젝트에선 어떤 식으로 사용할지 토의
- 피그마 계속 진행하며 상세 페이지의 기능 확정

#### 깨달은 점

- 아직 많이 더딘 것 같지만, ERD와 기능을 확실히 정한다면 속도가 날 것 같습니다.
- 개인이 진도를 나가기 위해선 팀적으로 필요한 부분들을 가능한 빨리, 신중하게 결정하는 것이 중요한 것 같습니다.

---

## 03.08

#### 주 내용

- 레프 코드를 어느정도 사용할지 토의하며, 참고용으로만 사용하고 우리만의 프로젝트를 진행하기로 함
- 기존 복지 레프기 때문에 이를 참고로 일자리 알고리즘을 어떤 방향으로 가져가야 할 지 토의하였음
- 일자리가 중점인 프로젝트이기 때문에 불필요한 부분의 기능들은 옵션으로 남겨두기
- 기능 명서세를 2인 1조로 작성하며 필수불가결한 데이터와 옵션 데이터를 나눠주며 페이지 별로 기능 확정

#### 깨달은 점

- 아직 서류 작성이 많이 되어있지 않아 회의록을 보고 나눴던 기능들에 대해 얘기하니 다시 처음으로 돌아가는 부분들이 존재
- 오늘 내일안에 서류를 작성하며 전체적인 흐름, 사용 기능, API, ERD에 대해 전체적으로 생각을 합칠 필요가 있었고 이번 주 내로 개발 시작 예정
- 정말 부지런해져야 겠다고 생각합니다.
  - 회의만으로도 알고리즘, 자소서 등 개인 공부할 시간이 부족하다고 느끼는 중..
  - 잠을 줄이고 계획을 짜서 효율적으로 시간을 써야겠다고 느꼈습니다.
- 프로젝트 시작하기 전 확실히 기능 및 프레임워크에 대해 더 학습할 필요가 있다고 생각했습니다.

---

## 03.09

#### 주 내용

- CF, CBF 알고리즘에 대해 회의
  - 어떤 식으로 어디에 적용을 할 것인가
  - User Based 사용 또는 Item Based 사용
- ERD 구성하기

#### 깨달은 점

- 병원 내원으로 디스코드로 참여했는데 다같이 들어와줘서 오전 회의 내용을 알 수 있었습니다.
- 전체 흐름은 다같은 방향성으로 생각해야 되기 때문에 꼭 필요한 부분이라고 생각했는데 너무 감사합니다 팀원분들 ㅠ
- 기능 정리 후 ERD 작성을 하며 피그마와 ERD 작성의 중요성을 다시 깨달았습니다.
  - 초석이 잘 깔려있다면 이후에 이슈가 발생하더라도 해결하는 것이 더 수월하다는 것을 이전 프로젝트에서도 뼈저리게 느꼈습니다!
- FRONT라도 DB에 관련된 것들을 알고 BACKEND 회의 등을 같이 참여하며 팀원의 역할, 할 일에 대해 이해하는 것이 팀을 함께 끌고 나가는 것에 대해 많이 도움이 되는 것 같습니다.
  - 특히, 얘기를 나누며 의견 조율이 필요할 때 건설적인 대화를 나눌 수 있는 것 같습니다.

---

## 3.10

#### 주 내용

- ERD 설계 및 현업자 멘토링

#### 깨달은 점

- 생각을 조금만 바꾸면 더 이해하기 쉽다는 것을 느꼈습니다.
  - cf 를 돌리며 어떤 컬럼을 대상으로 해야될지 어려웠는데
  - 별점이라는 예시를 듣고 많은 아이디어를 구상할 수 있었습니다.

---

## 3. 13

#### 주 내용

- 덤프 데이터 생성 및 erd 설계 완료
- 개발 단계 진입

#### 깨달은 점

- erd 양이 많이 않았지만 팀원들과 어떤 컬럼을 어떻게 사용할지 정하는 것이 조금 오래 걸렸습니다.
- 기능을 퀄리티 있게 구현하기 위해선 필요한 부분이라 생각합니다.

---

## 3.14

#### 주 내용

- 개인 일정으로 인해 휴식..

---

## 3.15

#### 주 내용

- 직종 코드 파싱
- 장고 셋업
- 리액트 페이지 구현

#### 깨달은 점

- 이제 개발에 박차를 가해야 된다!!
- API 설계 및 알고리즘 구현 필요

---

## 3.16

- 예비군 훈련

---

## 3.17, 3.20, 3.21

- 추천 알고리즘 추가 공부
- 라이브러리 이용하여 벡터화 시키기

---


## 3.22

#### 주 내용

- cbf 알고리즘 위한 벡터행렬 만들기
- 현업 선배님 멘토링



--- 

## 03. 23, 03.24

#### 주 내용

- 채용공고 벡터화 시키기
	- 직종 대분류 - 중분류 - 소분류 - 지역 대분류 - 소분류 - 학력 - 고용 조건 - 최소 학력
	- npy 파일로 내보내기
		- csv 파일로 내보낼시 문자열로 저장되어 이후 cos similarity 사용시 int 변환 필요
		- pd.DataFrame은 pandas 라이브러리를 사용하여 표 형식으로 데이터를 저장하는 데 사용됩니다. DataFrame은 행과 열을 가진 표와 같은 형식으로 데이터를 저장하므로 데이터를 쉽게 조작하고 분석할 수 있습니다. 또한 DataFrame은 여러 유형의 데이터 (숫자, 문자열, 논리 등)을 저장할 수 있습니다.
		- npy는 NumPy 라이브러리를 사용하여 배열 형식으로 데이터를 저장하는 데 사용됩니다. NumPy 배열은 동일한 유형의 데이터 (숫자, 문자열, 논리 등)만 저장할 수 있으며 배열의 모양을 변경하거나 조작하는 데 효과적입니다.
	- 따라서, pd.DataFrame을 사용하면 테이블 형식으로 데이터를 저장하고, NumPy 배열을 사용하면 수치 데이터를 저장하는 것이 효과적입니다. 또한 pd.DataFrame은 csv, Excel 등 다양한 파일 형식으로 저장할 수 있지만, npy는 NumPy 배열 형식으로만 저장할 수 있습니다

- 특성 나열한 행렬을 그대로 저장 후, 공고 클릭시 해당 공고와의 유사도 계산 로직
	- 현재 4천개 정도여서 금방 계산

```python

def similar_job(wanted_job):
    all_job_List = load_job_matrix()
    job_job_similar = []
    for i in range(1, len(all_job_List)):
        if i != wanted_job:
            job_job_similar.append((cos_sim(all_job_List[wanted_job], all_job_List[i]), i))
    job_job_similar.sort(key=lambda x:x[0], reverse=True)
    similar_job_code = [i[1] for i in job_job_similar[:5]]
    print(similar_job_code)
    return job_job_similar[:5]
```


- 이후 데이터가 많아질 것을 대비하여, sklearn cos_similarity 이용하여 해당 공고에 대한 유사도 matrix 자체를 저장해두기



```python

# 직업 별 유사도 행렬 불러와서 상위 5개 뽑아주기
# 이후 sim_job_num 에 상위 5개씩 저장
def job_sort():
    jobMatrix = np.load('./data/jobMatrix.npy')
    # 유사도 비교하여 저장
    calc_sim_job = cosine_similarity(jobMatrix, jobMatrix)
    # 유사도가 큰 순으로 정렬한 인덱스를 추출하되 자기 자신 제외하기
    b = np.sort(calc_sim_job)
    sorted_index = np.argsort(calc_sim_job)[:, ::-1]
    sorted_index = sorted_index[:, 1:]
    sim_job = []

    # 현재 인덱스 번호이므로 실제 공고 번호로 변경해준 후 저장
    for i in sorted_index:
        sim_job.append(i[:30])
    np.save('./data/sim_job_num', sim_job)
    return sim_job
```


- 공고 - 공고간 유사도 끝!
- 구직자에 대한 행렬의 열 데이터 뽑아내고 유사도 돌리기.
	- 이 때, '내가 본 공고를 본 다른 구직자'를 한정으로 하기 때문에, 실시간성으로 해야된다.


#### 배운 점

- 로직을 어떻게 짜야될지 모를 땐 완전 탐색으로라도 우선 짜기!
- 이후 개선 방향 생각해보자.
- 행렬을 만들 때, 유효한 데이터를 잘 뽑아내서, 유사도를 해야 정확한 결과가 나온다.
- argsort()를 이용하여 인덱스를 뽑아내고, 이를 통해 유사한 공고 번호를 뽑아냈는데, numpy의 경우 1차원 배열밖에 사용할 수 없어서 
	- 인덱스를 참조할 리스트를 꼭 들고 있어야된다!!
- cos_similarity를 사용한 이유
	- jakard의 경우 특성의 종류가 적은 경우 별로 좋지 않았고, 직업 유형에 binary가 아닌 것이 있었기 때문에 사용했습니다.
- numpy -> dot이 아닌 sklearn cos_similarity 사용한 이유
	- 공고 데이터는 자주 바뀌지 않으므로 미리 계산해 놓고 dump를 만들어 놓는 것이 효율적이라고 생각했습니다.


---

## 03.27

#### 주 내용

- jobMatrix의 기존 행렬을 변경해줌으로써 유사도에 정확성을 더 부여해줌
- 학력, 경력을 각자의 열이 아닌 포함 관계를 통해 가중치를 더해줬습니다.
	- 학력무관 2~3대졸 4대졸 석사 박사 가 해당 열에 대해서만 1을 주는 것이 아닌
	- 지원 가능한 하위 항목에도 1을 더해주는 것으로 변경
	- 즉 5개 -> 4개의 열로 변경 후,
	- 학력 무관인 경우 1 1 1 1 로 모든 학력에 대해 가중치를 줌

> 학력

```python
# 학력
        a = job.degree_code.degree_id
        if a == 0:
            jobMatrix[job.wanted_code][1527:1531] = [1, 1, 1, 1]     # 학력무관 - 1 1 1 1
        elif a == 4:
            jobMatrix[job.wanted_code][1527:1531] = [0, 1, 1, 1]     # 대졸 2~3 - 0 1 1 1 
        elif a == 5:
            jobMatrix[job.wanted_code][1527:1531] = [0, 0, 1, 1]     # 대졸 4   - 0 0 1 1
        elif a == 6:
            jobMatrix[job.wanted_code][1527:1531] = [0, 0, 0, 1]     # 석사     - 0 0 0 1
        else:
            jobMatrix[job.wanted_code][1527:1531] = [0, 0, 0, 0]     # 박사     - 0 0 0 0

```


> 근무일수

```python
  

        # 주 근무 일수

        working = job.working_day

        if working == "주6일근무":

            jobMatrix[job.wanted_code][1531] = 1

        elif working == "주5일근무":

            jobMatrix[job.wanted_code][1532] = 1

        elif "주 5일 미만":

            jobMatrix[job.wanted_code][1533] = 1
```



> 경력

```python
 # 경력

        car = job.career

        if car == "관계없음":                                   # 관계없음    1   1

            jobMatrix[job.wanted_code][1534:1536] = [1, 1]

        elif car == "신입":                                     #  신입       1   0

            jobMatrix[job.wanted_code][1534:1536] = [1, 0]        

        elif car == "경력":                                     #  경력       0   1

            jobMatrix[job.wanted_code][1534:1536] = [0, 1]
```


- 기존 최대 유사도

	![[assets/Pasted image 20230328162650.png]]

- 변경 후 유사도
	- 변경 후, 최대 유사도와 최소 유사도가 변경된 것을 볼 수 있습니다.
 
![[assets/Pasted image 20230328162805.png]]



- 또한 지역 대분류에 대한 가중치가 빠져있어서 추가해주었습니다.

![[assets/Pasted image 20230328233503.png]]

#### 배운 점

- matrix를 만들며 모든 열을 생성하지 않았다면, 개선의 여지가 없었을 수도 있다고 생각합니다.
- 최대한 비슷한 항목을 생각했고, 경력 및 지역의 경우 범주형 카테고리이기 때문에 자카드 유사도를 사용하려고 하였지만
	- 학력과 경력유무의 경우 상위 - 하위 관계를 확실히 할 수 있었기 때문에 가중치를 주고 비교하였습니다.
	- 확실히 가중치과 포함관계가 들어가니 더욱 정확한 유사도가 나오는 것을 볼 수 있었습니다.
- 처음 설계의 중요성에 대해 배울 수 있었습니다.
	- 모든 특성에 대해 상세히 고려하지 않으니 중간중간 코드바꾸는 것이 힘들었습니다 ㅠ...

---

## 03.28

>django
- 유저 매트릭스 생성
	- 직업 대분류 - 중분류 - 지역 - 학력
	- 경력과 선호하는 공고의 경우 가중치를 달리하여 직업에  + 해주었습니다.
	- 유저-유저 간 유사도는 관심있는 공고에 가중치를 많이 두기로 하여
		- 선호 공고 -> +3
		- 경력의 경우 -> 1년 미만 1점, 3년 이하 2점, 4~ 부터는 3점을 주었습니다.
- 이후 user-user cos_similarity를 계산하는데
	- 우선, 모든 이웃에 대해서 구해주었습니다.
	- 유사도가 비슷하게 나오는 문제가 발생하였고, 나이를 기록하는데 있어 문제가 있어 기록 방식 변경 -> 55 미만, 60미만, 65미만, 65이상


- 특성과 데이터 들고와서
	- 특성당 인덱스 매겨주기

```python
# 전체 유저
    # 유저 특성 행렬화 시키기
@api_view(['GET'])
def user_info(request):
    all_user = Users.objects.values('user_id','degree_code', 'city_code', 'favorite', 'age','gender')
    
    # job 코드 변수
    js = JobSubFamily.objects.all()
    jc = JobCategory.objects.all()
    # 지역변수
    city = Cities.objects.all()
    region = Regions.objects.all()
    
    # 유저경력 변수
    career = Careers.objects.all()
    # 직업 중분류 - 행렬 인덱스 매칭
    sub_to_index = {}
    for i in range(len(js)):
        sub_to_index[js[i].job_sub_code] = i+14
    # 지역 - 행렬 인덱스 매칭
    city_to_region = {}
    city_to_index = {}
    region_to_index = {}
    i = 126
    for k in region:
        region_to_index[k.region_code] = i
        i += 1
    
    # city - region 매칭
    # city - 행렬 인덱스 매칭
    for j in range(len(city)):
        city_to_region[city[j].city_code] = city[j].region_code.region_code
        city_to_index[city[j].city_code] = j + 144

```

```python
# 우선 전체 유저의 수 구하기

    user_length = all_user.aggregate(Max('user_id'))

    userMatrix = [[0]*384 for _ in range(user_length['user_id__max']+1)]
```
	
 
- 정해진 가중치에 따라 matrix에 기록
```python

 # 유저 정보에 대해 matrix에 기록
    for us in all_user:
        # 이력서 작성한 사람에 한해
        if us['degree_code']:
            us_num = us['user_id']
            fav = us['favorite']
            us_city = us['city_code']
            deg = us['degree_code']
            us_age = us['age']
            us_gen = us['gender']
        else:
            continue

        # 유저 관심 직종 +3 해주기
        userMatrix[us_num][sub_to_index[fav]] += 3
  
        # 지역 +1 해주기
        userMatrix[us_num][city_to_index[us_city]] += 1
        userMatrix[us_num][region_to_index[city_to_region[us_city]]] += 1


        # 학력 기록해주기
        if deg == 0:
            userMatrix[us_num][373:377] = [0,0,0,0]
        elif deg == 4:
            userMatrix[us_num][373:377] = [0,0,0,1]
        elif deg == 5:
            userMatrix[us_num][373:377] = [0,0,1,1]
        elif deg == 6:
            userMatrix[us_num][373:377] = [0,1,1,1]
        elif deg == 7:
            userMatrix[us_num][373:377] = [1,1,1,1]

        # 나이 기록해주기
        if us_age < 55:        
            userMatrix[us_num][378] = 1
        elif 55 <= us_age < 60:
            userMatrix[us_num][379] = 1
        elif 60 <= us_age < 65:
            userMatrix[us_num][380] = 1
        elif 65 <= us_age:
            userMatrix[us_num][381] = 1

        # 성별 - 남 1 여 2
        if us_gen == 0:
            userMatrix[us_num][382] = 1
        else:
            userMatrix[us_num][383] = 1

    # 유저 매트릭스로 저장
    # np.save('./data/userMatrix', userMatrix)
    # 유사도로 저장해주기
    calc_sim_user = cosine_similarity(userMatrix, userMatrix)
    sorted_index = np.argsort(calc_sim_user)[:, ::-1]
    sorted_index = sorted_index[:, 1:]
    return
```


>Front

- useQuery를 사용하기로 결정했습니다. 이유는 아래 몇 가지!
	- React 어플리케이션 내에서 데이터 패칭, 캐싱, 동기적, 서버의 상태의 업데이트를 좀 더 용이하게 만들어주기 떄문!
	- 기존에 직접 만들어 사용했던 기능들을 별도 옵션없이 사용가능하며, 수많은 코드 대신 React-Query 로직을 통해 짧은 코드로 대체 가능
	- 캐싱이 효율적
	- 백그라운드에서 알아서 오래된 데이터 업데이트
	- 페이징처리, 지연 로딩 데이터와 같은 성능 최적화
	- 서버 쪽 데이터를 가비지 컬렉션을 이용하여 자동으로 메모리 관리

#### 배운 점

- 유사도가 전부 0.98이상으로 나와 별 차이가 없었습니다.
	- 이유를 찾으니 age가 50~ 이상으로 숫자로 기록해주었고 각도기반의 cosine 유사도에서는 좋지않게 작용한다는 것을 알게 되었습니다.
	- 따라서, 각 age에 대해 열을 만들어 주거나, 범위를 정하여 0 과 1 로 표현해주는 것이 좋을 것 같습니다
- 성별도 비슷하여, 남 여로 열 구분해주었습니다.

---


## 03.29

#### 주 내용

> django


- 몇몇 table의 column명이 변경되어 있던 db가 있었는데 이전의 데이터를 들고 작업을 해왔습니다.
	- 따라서, 최신 db로 변경 후 오류 수정해주었습니다.
	- 대부분, code -> table명_code로 이름을 변경해주었고, 따라서 해당 부분의 코드만 수정해주었습니다.

- ALS 알고리즘 구현하기 위하여 희소행렬을 CSR_MATRIX 형식으로 변경해주었습니다.
```PYTHON
# csr 행렬로 변환해주기
def csr_matrix():
    mat = np.load('./data/user_to_job.npy')
    csr = sparse.csr_matrix(mat)

    # 희소성 측정
    matrix_size = csr.shape[0]* csr.shape[1]
    num_active = len(csr.nonzero()[0])
    sparsity = 100 * (1-(num_active/matrix_size))
    return

csr_matrix()
```

- 다만, 이 때, 희소성은 약 99.5%는 되어야 협업 필터링을 구축할 수 있기 때문에 현재 99.7%를 낮추기 위해서 데이터를 더 만들어주어야 할 것 같습니다.
- cf 에서는 적절한 행렬 분해를 하기 위해서는 모든 유저/아이템 상호작용 데이터를 사용해야하기 때문에
	- 모형을 훈련시키는 경우 일정한 확률로 랜덤하게 뽑힌 유저/아이템 상호작용을 숨겨야 함
	- 이후 테스트 단계에서 얼마나 유저가 실제로 추천된 아이템을 구매했는지 파악할 수 있음.

> 훈련데이터

- 랜덤 일정 확률로 유저/아이템 상호작용 몇 개를 가려 고객이 지원하거나, 본 적이 없는 것 처럼 만든다. -> 0으로 만들기
- 그리고 테스트 데이터는 원본 데이터에서 접근한 이력이 있으면 1, 없으면 0으로 채운 행렬
- 이런 방식으로 데이터를 세팅하면, 테스트 데이터에서 얼마나 유저가 실제 지원한 공고가 추천됐는지 파악할 수 있습니다.
- 만약 유저가 추천된 아이템을 실제 지원한 경우가 많을 경우 추천 시스템이 제대로 작동한다 말할 수 있습니다.

```python

## 훈련 데이터 만들기
def make_train(matrix, percentage = .2):
    '''
    ----------------------------------------------------
    설명
    유저-아이템 행렬 (matrix)에서
    1. 0 이상의 값을 가지면 1의 값을 갖도록 binary하게 테스트 데이터를 만들고
    2. 훈련 데이터는 원본 행렬에서 percentage 비율만큼 0으로 바뀜
    -----------------------------------------------------

    반환
    training_set: 훈련 데이터에서 percentage 비율만큼 0으로 바뀐 행렬
    test_set:     원본 유저-아이템 행렬의 복사본
    user_inds:    훈련 데이터에서 0으로 바뀐 유저의 index
    '''
    test_set = matrix.copy()
    test_set[test_set != 0] = 1 # binary하게 만들기
  
    training_set = matrix.copy()
    nonzero_inds = training_set.nonzero()
    nonzero_pairs = list(zip(nonzero_inds[0], nonzero_inds[1]))
    
    random.seed(0)
    num_samples = int(np.ceil(percentage * len(nonzero_pairs)))
    samples = random.sample(nonzero_pairs, num_samples)
    
    user_inds = [index[0] for index in samples]
    item_inds = [index[1] for index in samples]
    
    training_set[user_inds, item_inds] = 0
    training_set.eliminate_zeros()
    
    return training_set, test_set, list(set(user_inds))

# 훈련, 테스트 데이터 생성
mat = np.load('./data/user_to_job.npy')
csr = sparse.csr_matrix(mat)
product_train, product_test, product_users_altered = make_train(csr, 0.2)
```


> front

- useQuery를 이용해서 api가 설계된 데이터를 불러오는 작업을 했습니다.
- 기존에 로그인을 구현하였던 조원이 header -> application/json 으로 설정하였던 부분이 오류로 발생하였고
	- 해결하기 위하여 우선, 컴포넌트 내에서 axios를 독립적으로 사용해주었습니다.


#### 배운 점

- 경력, 관심도로 유사도 기준을 줄 수 있지만, CF에서는 아이템에 대한 평가로 결정되는 것이 좋아보였습니다.
	- 따라서, 기존의 COS 유사도를 나와 비슷한 유저의 척도로 사용하는 한편, 시간이 남는다면 KNN 알고리즘을 고려해볼 수 있을 것 같습니다.

- 또한, ALS 라는 암시적 피드백 데이터를 가지고 할 수 있는 알고리즘을 알게되어 적용해보기 위하여 행렬 분해를 적용해주었습니다.
	- 목적은 u번째 유저의 Xu 벡터와 i번재 아이템에 대한 Yi 벡터를 찾아서 유저 선호도 Pui를 구성하는 것
	- 유저 선호도 Pui는 유저 벡터 Xu와 아이템 벡터 Yi의 내적으로 표현
	- 즉, 선호도 행렬 P를 만드는데 이를 유저행렬 X와 아이템 행렬 Y로 만드는 것

![[assets/Pasted image 20230330093147.png]]

- 행렬 분해 - 차원 축소- 를 이용하여 구하며 아래와 같은 핵심을 가진다.
	- 매우 큰 유저-아이템 행렬로부터
	- 숨겨진 피처들을 뽑아내서
	- 이들을 훨씬 작은 유저들의 특징을 담은 행렬과 아이템 특징을 담은 행렬로 분해하는 것


---


## 03.30

#### 주 내용

- ALS 알고리즘 구현하기
	- 희소 행렬 -> 신뢰 행렬로 변경해주기

![[assets/Pasted image 20230330092651.png]]

- C는 u번째 유저의 i번째 아이템에 대한 신뢰 행렬
	- 알파는 선호도 -> 클릭 + 북마크 + 지원에 대한 스케일링 term,  , 논문에서는 알파 40을 초기값으로 제안
	- r은 원본 행렬

참고 - https://assaeunji.github.io/machine%20learning/2020-11-29-implicitfeedback/

```python

```python
def implicit_weighted_ALS(training_set, lambda_val = .1, alpha = 40, n_iter=10, rank_size = 20, seed = 0):
    '''
    협업 필터링에 기반한 ALS
    -----------------------------------------------------
    input
    1. training_set : m x n 행렬로, m은 유저 수, n은 아이템 수를 의미. csr 행렬 (희소 행렬) 형태여야 함 
    2. lambda_val: ALS의 정규화 term. 이 값을 늘리면 bias는 늘지만 분산은 감소. default값은 0.1
    3. alpha: 신뢰 행렬과 관련한 모수 (C_{ui} = 1 + alpha * r_{ui}). 이를 감소시키면 평점 간의 신뢰도의 다양성이 감소
    4. n_iter: 반복 횟수
    5. rank_size: 유저/ 아이템 특성 벡터의 잠재 특성의 개수. 논문에서는 20 ~ 200 사이를 추천하고 있음. 이를 늘리면 과적합 위험성이 있으나 
    bias가 감소
    6. seed: 난수 생성에 필요한 seed
    -----------------------------------------------------
    반환
    유저와 아이템에 대한 특성 벡터
    '''
    start = time()
    # 1. Confidence matrix
    # C = 1+ alpha * r_{ui}
    conf = (alpha*training_set)  # sparse 행렬 형태를 유지하기 위해서 1을 나중에 더함

    num_user = conf.shape[0]
    num_item = conf.shape[1]

    # X와 Y 초기화
    rstate = np.random.RandomState(seed)
    X = sparse.csr_matrix(rstate.normal(size = (num_user, rank_size)))
    Y = sparse.csr_matrix(rstate.normal(size = (num_item, rank_size)))
    X_eye = sparse.eye(num_user)
    Y_eye = sparse.eye(num_item)
    
    # 정규화 term: 𝝀I
    lambda_eye = lambda_val * sparse.eye (rank_size)
    
    # 반복 시작
    for i in range(n_iter):
        yTy = Y.T.dot(Y)
        xTx = X.T.dot(X)
        
        # Y를 고정해놓고 X에 대해 반복
        # Xu = (yTy + yT(Cu-I)Y + 𝝀I)^{-1} yTCuPu
        for u in range(num_user):
            conf_samp = conf[u,:].toarray() # Cu
            pref = conf_samp.copy()
            pref[pref!=0] = 1
            # Cu-I: 위에서 conf에 1을 더하지 않았으니까 I를 빼지 않음 
            CuI = sparse.diags(conf_samp, [0])
            # yT(Cu-I)Y
            yTCuIY = Y.T.dot(CuI).dot(Y)
            # yTCuPu
            yTCupu = Y.T.dot(CuI+Y_eye).dot(pref.T)
            
            X[u] = spsolve(yTy + yTCuIY + lambda_eye, yTCupu)
        
        # X를 고정해놓고 Y에 대해 반복
        # Yi = (xTx + xT(Cu-I)X + 𝝀I)^{-1} xTCiPi
        for i in range(num_item):
            conf_samp = conf[:,i].T.toarray()
            pref = conf_samp.copy()
            pref[pref!=0] = 1
            
            #Ci-I
            CiI = sparse.diags (conf_samp, [0])
            # xT(Ci-I)X
            xTCiIX = X.T.dot(CiI).dot(X)
            # xTCiPi
            xTCiPi = X.T.dot(CiI+ X_eye).dot(pref.T)
            
            Y[i] = spsolve(xTx + xTCiIX + lambda_eye, xTCiPi)
        end = time()
        return X, Y.T
    

user_vecs, item_vecs = implicit_weighted_ALS(product_train, lambda_val = 0.1, alpha = 15, n_iter= 1,rank_size = 20, seed=0)
```

- 현재는 한 번의 반복으로 20개의 잠재 특성, 알파 = 15, 람다 0.1로 하였을 때, 20초 정도가 걸리는 걸 볼 수 있습니다.
- 특정한 유저의 예측된 평점을 구하려면 유저 벡터와 아이템 벡터의 내적곱을 하면 됩니다.
```python
first = user_vecs[1].dot(item_vecs).toarray()
print(first[0, :30])
```

![[assets/Pasted image 20230330110948.png]]

- 유사도가 너무 낮게 측정되지만 이유를 찾을 수 없지만 추측해보자면, 희소성이 너무 높다고 생각합니다.

> AlternatingLeastSquares

- implicit 라이브러리에 ALS를 바로 사용할 수 있어서 활용하였습니다.

```PYTHON
# # 훈련, 테스트 데이터 생성
mat = np.load('./data/user_to_job.npy')
csr = sparse.csr_matrix(mat)
product_train, product_test, product_users_altered = make_train(csr, 0.2)

alpha = 15
als_model = AlternatingLeastSquares( factors=50, regularization=0.01, iterations=50)

als_model.fit(csr)
user_vector = als_model.user_factors
item_vector = als_model.item_factors
# score = user_vector.dot(item_vector)
predictions = [sparse.csr_matrix(user_vector), sparse.csr_matrix(item_vector.T)]
```


- 훈련 데이터 중 20%는 가려져있음
- 이를 이용해서 추천 시스템의 성능을 평가할 것인데, 결과적으로는 유저마다 예측 평점이 높은 아이템이 실제로 조회한 아이템인지를 봐야한다.
- 흔히 쓰이는 지표 -> ROC 커브
	- ROC 커브 밑에 차지하는 면적이 넓을수록 추천할 아이템과 실제 구매 아이템이 비슷

```PYTHON
def auc_score(test, predictions):
    '''
    fpr, tpr를 이용해서 AUC를 계산하는 함수
    '''
    fpr, tpr, thresholds = metrics.roc_curve(test, predictions)
    return metrics.auc(fpr,tpr)
```

- 위 auc_score 함수를 helper 함수로 가려진 유저들의 AUC 계산해주기

```python
def calc_mean_auc(training_set, altered_users, predictions, test_set):

    '''
    가려진 정보가 있는 유저마다 AUC 평균을 구하는 함수
    ----------------------------------------
    input
    1. training_set: make_train 함수에서 만들어진 훈련 데이터 (일정 비율로 아이템 구매량이 0으로 가려진 데이터)
    2. prediction: implicit MF에서 나온 유저/아이템 별로 나온 예측 평점 행렬
    3. altered_users: make_train 함수에서 아이템 구매량이 0으로 가려진 유저
    4. test_set: make_train함수에서 만든 테스트 데이터
    ----------------------------------------

    반환
    추천 시스템 유저의 평균 auc
    인기아이템 기반 유저 평균 auc
    '''
    # 리스트 초기화
    store_auc = []
    popularity_auc = []
    pop_items = np.array(test_set.sum(axis = 0)).reshape(-1) # 모든 유저의 아이템별 구매횟수 합
    item_vecs = predictions[1] # 아이템 latent 벡터
    
    for user in altered_users:
        training_row = training_set[user,:].toarray().reshape(-1) # 유저의 훈련데이터
        zero_inds = np.where(training_row == 0) # 가려진 아이템 Index
        # 가려진 아이템에 대한 예측
        user_vec = predictions[0][user,:]
        pred = user_vec.dot(item_vecs).toarray()[0,zero_inds].reshape(-1)
        # 가려진 아이템에 대한 실제값
        actual = test_set[user,:].toarray()[0,zero_inds].reshape(-1)
        # 가려진 아이템에 대한 popularity (구매횟수 합)
        pop = pop_items[zero_inds]
        # AUC 계산
        store_auc.append(auc_score(actual, pred))
        popularity_auc.append(auc_score(actual,pop))
    return float('%.3f'%np.mean(store_auc)), float('%.3f'%np.mean(popularity_auc))
```

```PYTHON
## 훈련, 테스트 데이터 생성
mat = np.load('./data/user_to_job.npy')
csr = sparse.csr_matrix(mat)
product_train, product_test, product_users_altered = make_train(csr, 0.2)

alpha = 15
als_model = AlternatingLeastSquares( factors=50, regularization=0.01, iterations=50)

als_model.fit(csr)
user_vector = als_model.user_factors
item_vector = als_model.item_factors

# score = user_vector.dot(item_vector)
predictions = [sparse.csr_matrix(user_vector), sparse.csr_matrix(item_vector.T)]

calc_mean_auc(product_train, product_users_altered, predictions, product_test)

```

![[assets/Pasted image 20230330170125.png]]

- 위 결과를 통해 ALS 추천 시스템이 인기있는 아이템 기반 알고리즘보다 나은 성능인 것을 알 수 있습니다.
- 위에서 정한 모수들을 바꾸며 더 높은 AUC를 가질 수 있는지 조정 가능
- 0.7 정도의 AUC는 중간 정도의 성능이므로 개선 여지 있음


> 추천 함수 작성

- 유저가 접근을 하지 않은 아이템만 보내주는 것과
- 모든 공고를 보내주는 함수 2가지로 작성

- 전체 아이템 보내주기
```python

@api_view(['GET'])
def recommend_items_for_user(request, user_id):
    ## 훈련, 테스트 데이터 생성
    mat = np.load('./data/user_to_job.npy')
    csr = sparse.csr_matrix(mat)
    product_train, product_test, product_users_altered = make_train(csr, 0.2)

    # 라이브러리로 ALS 돌리기
    # 모델 학습
    als_model = AlternatingLeastSquares( factors=50, regularization=0.01, iterations=50)
    als_model.fit(product_train)
    # 학습된 ALS 모델을 사용하여 유저-아이템 행렬의 예측값 계산
    user_factors = als_model.user_factors
    item_factors = als_model.item_factors
    user_item_matrix = user_factors.dot(item_factors.T)
    user_vector = user_item_matrix[user_id, :]
    item_idx = np.argsort(-user_vector)[:200]
    recommended_items = [idx for idx in item_idx]
    return Response(recommended_items)
```


- 접근하지 않은 아이템 중 보내주기
```python
# 추천 함수 -> 유저가 보지 않은 데이터로만 보냄
def recommend_items(request, user_id):

    ## 훈련, 테스트 데이터 생성
    mat = np.load('./data/user_to_job.npy')
    csr = sparse.csr_matrix(mat)
    product_train, product_test, product_users_altered = make_train(csr, 0.2)

    # 라이브러리로 ALS 돌리기
    # 모델 학습
    als_model = AlternatingLeastSquares( factors=50, regularization=0.01, iterations=50)
    als_model.fit(product_train)

    # 학습된 ALS 모델을 사용하여 유저-아이템 행렬의 예측값 계산
    user_factors = als_model.user_factors
    item_factors = als_model.item_factors
    user_item_matrix = user_factors.dot(item_factors.T)

    # 모델로부터 유저 및 아이템 특징 벡터 행렬 획득
    user_vector = als_model.user_factors
    item_vector = als_model.item_factors

    # 유저가 본 공고 목록 획득
    user_click = user_item_matrix[user_id].indices
  
    # 유저가 아직 보지않은 공고 목록 획득
    all_jobs=np.arange(user_item_matrix.shape[1])
    non_user_jobs = np.setdiff1d(all_jobs, user_click)

    # 유저-상품 간 코사인 유사도 계산
    user_vec = user_vector[user_id]
    sim_scores = item_vector[non_user_jobs].dot(user_vec)

    # 유사도를 기준으로 내림차순으로 정렬하여 상위 num_items개의 아이템 추출
    best_items = non_user_jobs[np.argsort(-sim_scores)[:30]]
    return best_items
```


---

## 03.31

#### 주 내용

- 속도 개선을 위해 기존 list로 연산하던 것을 np.array로 배열로 변경
	- np.array를 이용해준다.
	- 모든 원소가 같은 자료형이며, 원소의 갯수를 바꿀 수 없다는 특징이 있음
- 기존 AUC 수치가 0.7이여서 ALS 알고리즘 파라미터를 변경해보며
	- factor -> 20, alpha -> 40 으로 변경시 아래와 같이 성능 개선한 결과를 얻을 수 있었습니다.

```python
als_model = AlternatingLeastSquares(factors=20, regularization=0.01, iterations=50, alpha=40)
```
	                  ![[assets/Pasted image 20230331160036.png]]

- test 하던 함수 다 날리고 정리하였습니다.
- 크게, 
	- user log가 쌓여서 업데이트 해주는 logic 함수 -> user_train()
	- 추천해주는 함수 -> recommend_items_for_user()
	- auc 커브로 성능 측정 logic 함수 -> check_calc_mean()

> 추천 함수
	- argsort의 경우 오름차순이므로 -를 붙여서 내림차순으로 정렬해주었습니다.

```python
@api_view(['GET'])

def recommend_items_for_user(request, user_id):

    user_item_matrix = np.load('./data/rec_user_to_job.npy')

    user_vector = user_item_matrix[user_id, :]

    print(user_vector)

    item_idx = np.argsort(-user_vector)[:200]

    recommended_items = [idx for idx in item_idx]

    return Response(recommended_items)
```

> user_train()

```python
@api_view(['GET'])
def user_train(request):
    # 모든 유저와 아이템 간의 예측 평점이 계산됨
    mat = user_to_job()
    csr = sparse.csr_matrix(mat)
    product_train, product_test, product_users_altered = make_train(csr, 0.2)

    # 라이브러리로 ALS 돌리기
    # 모델 학습
    als_model = AlternatingLeastSquares(factors=20, regularization=0.01, iterations=50, alpha=40)
    als_model.fit(product_train)

    # 학습된 ALS 모델을 사용하여 유저-아이템 행렬의 예측값 계산
    user_factors = als_model.user_factors
    item_factors = als_model.item_factors
    user_item_matrix = user_factors.dot(item_factors.T)
    np.save('./data/rec_user_to_job', user_item_matrix)
    return Response('success')
```

- make_train()과 user_to_job() 함수 이용하여, 행렬 업데이트 및 학습 데이터 생성해준 후,
- 모델 학습 시켜서 예측값 계산 후 저장
- response -> 'success'


> rec_cf_user

- 비슷한 유저들이 좋아하는 공고 추천
- als 알고리즘 추천시 cold start 발생할 수 있으니 그 때도 사용

```python
# 유저 특성 행렬화 시키기
@api_view(['GET'])
def rec_cf_user(request, user_id):
    user_list = np.load('./data/user_to_user.npy')
    rec_user = user_list[user_id][:5]
    user_item_matrix = np.load('./data/rec_user_to_job.npy')
    res_data = []
    for i in rec_user:
        user_vector = user_item_matrix[user_id, :]
        item_idx = np.argsort(-user_vector)[:5]
        for j in item_idx:
            res_data.append(j)
    return Response(res_data)
```

---


---

## 04.03, 04.04

- 유저 flow에 따른 테스트
- django logic에서 이력서 추가 및 업데이트 시 요청 함수가 너무 느렸던 문제
- 기존 함수

```python

# 신규유저 행렬에 추가
@api_view(['GET'])
def update_user_matrix(request, user_id):
    user_matrix = np.load('./data/userMatrix.npy')
    new_arr = [0] * 384
    all_user = Users.objects.values('user_id','degree_code', 'city_code', 'favorite', 'age','gender')
    user_length = all_user.aggregate(Max('user_id'))
    now_arr = len(user_matrix)
    for _ in range(user_length['user_id__max'] - now_arr + 1):
        np.append(user_matrix, np.array(new_arr))
    print(len(user_matrix[3]))
    # job 코드 변수
    js = JobSubFamily.objects.all()
    jc = JobCategory.objects.all()
    # 지역변수
    city = Cities.objects.all()
    region = Regions.objects.all()
    
    # 직업 중분류 - 행렬 인덱스 매칭
    sub_to_index = {}
    for i in range(len(js)):
        sub_to_index[js[i].job_sub_code] = i+14
    # 지역 - 행렬 인덱스 매칭
    city_to_region = {}
    city_to_index = {}
    region_to_index = {}
    i = 126
    for k in region:
        region_to_index[k.region_code] = i
        i += 1
    
    # city - region 매칭
    # city - 행렬 인덱스 매칭
    for j in range(len(city)):
        city_to_region[city[j].city_code] = city[j].region_code.region_code
        city_to_index[city[j].city_code] = j + 144
    # 유저경력 변수
    career = Careers.objects.all()
    # 경력에 대해 matrix에 기록해주기
    # 학력 - 373 4 5 6
    # 나이 - 378 9 380 381
    # 성별 - 382 383
    for car in career:
        user_num = car.user_id
        job_num = car.sub_code.job_sub_code
        user_matrix[user_num][sub_to_index[job_num]] = car.period
    # 유저 정보에 대해 matrix에 기록
    for u in all_user:
        if u['user_id'] == user_id:
            us = u
            break
    # 이력서 작성한 사람에 한해 
    us_num = us['user_id']
    fav = us['favorite']
    us_city = us['city_code']
    deg = us['degree_code']
    us_age = us['age']
    us_gen = us['gender']
    # 유저 관심 직종 +3 해주기
    user_matrix[us_num][sub_to_index[fav]] += 3
    # 지역 +1 해주기
    user_matrix[us_num][city_to_index[us_city]] += 1
    user_matrix[us_num][region_to_index[city_to_region[us_city]]] += 1
    print(len(user_matrix[user_id]))
    # 학력 기록해주기
    if deg == 0:
        user_matrix[us_num][373:377] = [0,0,0,0]
    elif deg == 4:
        user_matrix[us_num][373:377] = [0,0,0,1]
    elif deg == 5:
        user_matrix[us_num][373:377] = [0,0,1,1]
    elif deg == 6:
        user_matrix[us_num][373:377] = [0,1,1,1]
    elif deg == 7:
        user_matrix[us_num][373:377] = [1,1,1,1]
    # 나이 기록해주기
    if us_age < 55:        
        user_matrix[us_num][378] = 1
    elif 55 <= us_age < 60:
        user_matrix[us_num][379] = 1
    elif 60 <= us_age < 65:
        user_matrix[us_num][380] = 1
    elif 65 <= us_age:
        user_matrix[us_num][381] = 1
    # 성별 - 남 1 여 2
    if us_gen == 0:
        user_matrix[us_num][382] = 1
    else:
        user_matrix[us_num][383] = 1
    # 유저 매트릭스로 저장
    np.save('./data/userMatrix', user_matrix)
    # 유사도로 저장해주기
    calc_sim_user = cosine_similarity(user_matrix, user_matrix)
    
    sorted_index = np.argsort(calc_sim_user)[:, ::-1]
    sorted_index = sorted_index[:, 1:]
    # 유저간 유사도
    np.save('./data/userToUser', sorted_index)
    return Response(True)
```


아래 4가지 문제를 발견
- 경력이 전체 유저에 대해 돌아가고 있었던 문제
- column - 지역 대분류, 중분류 및 직종 대분류 중분류를 컬럼별로 매칭 시켜주는 것- 이 느렸던 문제
- np array에 append가 되지 않았던 문제
- np로 저장하는 것이 조금 느렸던 문제

따라서, 아래와 같이 해결 해주었습니다.
- column 필드 값을 딕셔너리로 매핑해 미리 선언해주었음
- 경력의 경우 특정 id 값에 해당하는 data만 들고옴

```python
career = Careers.objects.all()
    user_career = career.filter(user_id=user_id)
    for uc in user_career:
        user_matrix[user_id][sub_to_index[uc.sub_code.job_sub_code]] += 2
```

- append의 경우 반환하는 값이 user_matrix에 재할당 해주지 않아서 발생했엇음

```python
user_length = all_user.aggregate(Max('user_id'))
    now_arr = len(user_matrix)
    new_row = np.zeros((1, 384))
    for _ in range(user_length['user_id__max'] - now_arr + 1):
        user_matrix = np.append(user_matrix, new_row, axis=0)
```

- np로 저장하는 것은 2~3초의 문제라서 우선 보류

# **Interview Mate**
**자기소개서 기반 AI 면접 도우미 - 면접메이트**

## 프로젝트 개요
 면접 MATE는 ChatGPT4 API를 활용하여 사용자가 제공한 자기소개서, 직무 정보 등에 따라 맞춤형 면접 질문을 생성하고 사용자의 답변에 대한 실시간 첨삭 및 피드백을 제공하는 생성형 AI 기반 웹 서비스입니다.
 사용자가 입력한 직무 및 자기소개서를 기반으로 1차 면접 예상 질문을 제공하고 이 답변 내용을 바탕으로 꼬리질문까지 제공받을 수 있습니다.
 면접 예상질문으로 개인의 장점과 약점을 체계적으로 분석하여 사용자별 효과적인 면접 대비 전략을 수립할 수 있도록 하고자 합니다.

### 개발 기간
- 2024.11.21 ~ 2024.12.17

### 배포 링크
- [DOCKER](https://hub.docker.com/u/interviewmate1)
- [Canva 발표](https://www.canva.com/design/DAGZhKE4e38/j056DkGgbzqXw5zckbEosQ/view?utm_content=DAGZhKE4e38&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he8d6b216c1)

### 기술 스택
- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MySQL
- **AI**: ChatGPT
- **Containerization & Orchestration**: Docker, Kubernetes

## SW 아키텍처
![interviewmate](https://github.com/user-attachments/assets/3a4f997d-7afb-4f99-90a7-d26be7682b83)

## ERD
![ERD](https://github.com/user-attachments/assets/8cddd746-203c-424c-aa2c-b06402015ea5)

## 시연 영상바로가기
**사진을 누르면 이동합니다.**
[![InterviewMateDemo](https://github.com/user-attachments/assets/2dad03bb-6e47-4e5f-8391-5b5abf87ee0c)](https://drive.google.com/file/d/1ThoCayb-lYAzA3q9bWbTHnmy-SoBefB9/view?usp=sharing)

## 주요 기능
### 1. 직무 기반 면접 질문 생성
- 사용자가 선택한 직무와 자기소개서를 기반으로 AI가 맞춤형 질문을 생성합니다.
- 경력, 경험, 직무 요구사항 등을 분석하여 최적화된 면접 질문을 제공합니다.

### 2. 답변 평가 및 추가 질문 생성
- 사용자의 답변을 논리성, 직무 적합성 등 다양한 측면에서 분석하고 피드백을 제공합니다.
- 답변 내용을 바탕으로 심층적인 추가 질문을 생성하여 구체적인 면접 대비를 지원합니다.

### 3. 면접 로그 저장
- 이전 면접 질문과 답변을 저장하여 일관된 연습 환경을 제공합니다.
- 저장된 로그를 조회해 이전 답변을 점검하고 참고할 수 있습니다.

## 팀원소개
| 이름   | 담당  | 
| :--: | :--: |
| 임소연 | Backend, 도커 및 쿠버네티스 yaml파일 작성 | 
| 장아현 | Frontend, Backend, 도커 및 쿠버네티스 yaml파일 작성| 
| 장희진 | Backend, 도커 및 쿠버네티스 yaml파일 작성 |

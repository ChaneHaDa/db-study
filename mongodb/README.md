# MongoDB 학습

이 폴더는 MongoDB 학습을 위한 환경입니다.

## 실행 방법

```bash
# MongoDB 서버 시작
docker-compose up -d

# 서비스 확인
docker-compose ps

# MongoDB 쉘 접속
docker exec -it mongodb-study mongosh

# MongoDB Express (웹 인터페이스)
# http://localhost:8081
# ID: admin, PW: admin

# 서비스 중지
docker-compose down
```

## 접속 정보

- MongoDB 호스트: localhost
- 포트: 27017
- 관리자 계정: admin / password
- 학습용 데이터베이스: testdb
- 학습용 계정: studyuser / studypassword

## 학습용 데이터

초기 실행 시 자동 생성:
- testdb 데이터베이스
  - users 컬렉션
  - posts 컬렉션
  - comments 컬렉션
# MongoDB 학습 계획

## 1단계: 기초 개념 (1-2일)
- [ ] NoSQL vs RDBMS 차이점 이해
- [ ] MongoDB 아키텍처 구조 학습
- [ ] Document, Collection, Database 개념 익히기
- [ ] BSON 형식 이해

## 2단계: 기본 연산 (2-3일)
- [ ] Docker로 MongoDB 환경 구축
- [ ] `insertOne()`, `insertMany()`로 데이터 삽입
- [ ] `find()`, `findOne()`으로 데이터 조회
- [ ] `updateOne()`, `updateMany()`로 데이터 수정
- [ ] `deleteOne()`, `deleteMany()`로 데이터 삭제

## 3단계: 쿼리 심화 (2-3일)
- [ ] Query operators (`$eq`, `$gt`, `$in`, `$ne` 등)
- [ ] Logical operators (`$and`, `$or`, `$not`)
- [ ] Element operators (`$exists`, `$type`)
- [ ] Array operators (`$all`, `$elemMatch`)
- [ ] Projection으로 필드 선택

## 4단계: Aggregation Framework (3-4일)
- [ ] Pipeline 개념 이해
- [ ] `$match`, `$group`, `$sort` 스테이지
- [ ] `$project`, `$limit`, `$skip` 스테이지
- [ ] `$lookup`으로 조인 구현
- [ ] 복잡한 데이터 분석 쿼리 작성

## 5단계: Indexing (2일)
- [ ] Index 기본 개념과 종류
- [ ] Single field, Compound index 생성
- [ ] Text index, Geospatial index
- [ ] `explain()`으로 쿼리 성능 분석
- [ ] Index 최적화 전략

## 6단계: 고급 기능 (2-3일)
- [ ] Schema validation 설정
- [ ] Transactions 사용법
- [ ] GridFS로 대용량 파일 저장
- [ ] Change Streams으로 실시간 데이터 모니터링

## 7단계: 운영 및 배포 (2일)
- [ ] Replica Set 구성
- [ ] Sharding 설정
- [ ] Backup 및 복구 전략
- [ ] 모니터링과 성능 튜닝

## 8단계: 실습 프로젝트 (3-4일)
- [ ] 블로그 API 설계 및 구현
- [ ] 사용자 인증 시스템
- [ ] 게시판 CRUD 기능
- [ ] 댓글 및 좋아요 기능
- [ ] 검색 및 페이징 구현

## 학습 자료
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 클라우드 실습 환경

## 팁
- 각 개념은 실제 코드로 직접 실행해보기
- `mongodb_basics.ipynb` 노트북 활용
- 작은 프로젝트로 지식 적용하기
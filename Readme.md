# Goblin Club

* 실행 방법


    nodemon -w ./ bin/frontServer.js        -> 파일 변경시 Front server 재시작
    webpack --progress --colors --watch     -> Client React 파일 컴파일 후 번들
    

## 사용 모듈

- UI
    - React
    - React-dom
    - React-bootstrap
    - Radium
- Router
    - React-Router
    - history
- Data flow
    - alt
- ES6
    - babel
    - babel-core
- Build
    - webpack
        - babel-loader
- Server
    - Express
    

> babel-plugin-flow-comments는 Radium 에서 의존성 문제 발생 떄문에 설치


## Todo

- 회원
- 클럽들
- 글쓰기(Posting)
- Pagination
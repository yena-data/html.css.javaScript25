# form 이란?

양식을 제출 함

1. input창 입력하고 enter 시 작동 양식 : 폼
2. ctrl +shift +c 개발자 도구로 form 태그 확인
3. 용도 : 추가/수정 create, update
4. 사용법 :
   - label+input+select :내용물
   - button :동작하는 버튼
5. 특징 : 제출했을 때 무조건 새로고침
   - 해결 : 새로고침 방지 (js)

## input

1. type : 글자 또는 비밀번호 암호화 가능 ctrl +space bar
2. label 태그와 연결 가능
   - label의 for값과 input의 id값을 같게 주면 됨

## select

1. label와 연결시 유용
2. option 태그와 사용
<select>
<option value="옵션1">option1</option>
</select>
    - option을 선택 할때 보이는 글자가 아니라   option 태그 안의 value 값을 받아 옴
3. value를 입력하지 않은 option 태그를 placeholde처럼 사용
   - placeholder : 예시를 적을때 사용. 사용설명
4. selected 속성을 부여해서 미리 값을 정해줄 수 있음
   - 중복되게 부여한다면 마지막 옵션을 선택

## 제출 버튼

1. button :
   - type 속성의 기본 값이 submit
     ** form태그 안에서만 사용가능 **
   - 양식 제출 안하게 하려면 type button;
   - 초기화 => reset
2. input button
   - value값에 이름을 넣어줘야함 제출은 안됨
   - type="submit" 제출하기 버튼으로 작동함

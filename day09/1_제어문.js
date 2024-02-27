/*

    제어문
        - 조건문 : if문
            - 흐름에 제어   : 상황(T/F)에 코드의 실행여부 판단
            - if( 조건/논리 ){ 실행문; }
        - 반복문 : for문
            - 특정코드 반복 : 상황(T/F)에 코드를 반복여부 판단
*/
// 1. 복습1
if( true ){ document.write(`<p>day08복습</p>`);}
// 2. 복습2
if( 3 > 1 ){ document.write(`<p>true</p>`);}
else{ document.write(`<p>false</p>`);}
// 3. 복습3
if( 10 > 9 ){ document.write(`<p> 10 > 9 true </p>`); }
else if( 10 > 6 ){ document.write(`<p> 10 > 6 true </p>`); }
else if( 10 > 3 ){ document.write(`<p> 10 > 3 true </p>`); }
else{ document.write(`<p> 그 외 false </p>`);}
// 4. 복습 활용1 : 아래 점수 변수의 값이
    // 90점 이상이면 '합격' 70점 이상이면 '재시험' 그외 '탈락' HTML 출력
let 점수 = 75;
if( 점수 >= 90 ){document.write(`<p>합격</p>`);}
else if( 점수 >= 70 ){ document.write(`<p>재시험</p>`);}
else{ document.write(`<p>불합격</p>`);}
// 5. 복습4
for( let i = 1 ; i <= 5 ; i++){      // i는 1부터 5까지 1씩 증가, i가 6일때 종료
    document.write(`<p>${ i }</p>`); // `: 키보드 왼쪽tab키 위에 `키
}// for end
for( i = 5 ; i >= 1 ; i--){          // i는 5부터 1까지 1씩 감소, i가 0일때 종료
    document.write(`<p>${ i }</p>`);
}// for end
// 6. 복습 활용2 : 아래 합계 변수의 1~10까지 누적합계를 구하시고
let 합계 = 0;
// 1 더하기
합계 = 합계 + 1 ; // 복합연산자, 합계 = 합계 + 1 ;
합계 = 합계 + 2 ;
합계 = 합계 + 3 ;
합계 = 합계 + 4 ;
합계 = 합계 + 5 ;
합계 = 합계 + 6 ;
합계 = 합계 + 7 ;
합계 = 합계 + 8 ;
합계 = 합계 + 9 ;
합계 = 합계 + 10 ;
document.write(`<p>${합계}</p>`);
for( let i = 1 ; i <= 10 ; i++ ){
    합계 += 1;
}
document.write(`<p>${합계}</p>`);
// 7. 복습5 : 구구단 출력
for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){
    document.write(`<p>2 x ${ 곱 } = ${2*곱}</p>`);
}
// 8. 복습 활용3 : 2~9단 구구단 출력
for( let 곱 = 1 ; 곱 <= 9 ; 곱++){
    document.write(`<p> 2 x ${ 곱 } = ${ 2 * 곱 }`);
}
for( let 단 = 2 ; 단 <= 9 ; 단++);{
    for( let 곱 = 1 ; 곱 <= 9 ; 곱++);{
        document.write(`${단} x ${곱} = ${ 단 * 곱 } ,`);
    }
}
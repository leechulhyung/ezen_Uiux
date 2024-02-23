/*
    p.76 반복문
        - 특정 조건을 충족할때 반복 작업
        - 필수는 아니다. 효율적인 코드로 변경 가능.
        - 형태
            for( 초기값 ; 조건문 ; 증강식 ){ true일때 반복실행문; }
            for( 어디서부터 ; 어디까지 ; 몇씩증가/감소 ){ true일때 반복실행문; }
            for( let i = 1 ; i<=10 i++ ){ true일때 반복실행문; }
*/
// ex1) 반복문 없이 출력 10번 하기.
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
document.write('<p> 자바스크립트 공부 </p>');
// ex2) 반복문을 이용한 출력 10번 하기
for( let i = 1 ; i <=10 ; i++ ){
     // i변수는 1부터 10 이하까지 1씩 증가 반복처리
     document.write('<p> 자바스크립트 공부 </p>');
} //end
// ex3) 엘레베이터가 1층부터 5층까지 1층씩 증가
for( let 층 = 1 ; 층 <= 5 ; 층++ ){
    document.write(`<p>현재층 : ${ 층 }올라가는중 </p>`);
}// end

// ` : 키보드에서 tab키 위에 `(백틱)을 이용한 문자처리 가능
// 문자 안에 변수 또는 데이터 연결할때
    //1. " " 또는 ' ' 또는 ` ` : + 연결연산자
    //2. ` ` : ${ }

// ex4) 엘레베이터가 5층부터 1층까지 1층씩 감소
for( let 층 = 5 ; 층 >= 1 ; 층-- );{
    document.write(`<p>현재층 : ${ 층 }내려가는중 </p>`);
} 
// ex5) 2단 구구단 (반복문 없이)
document.write(`<p> 2 x 1 = 2 </p>`);
document.write(`<p> 2 x 2 = 4 </p>`);
document.write(`<p> 2 x 3 = 6 </p>`);
document.write(`<p> 2 x 4 = 8 </p>`);
document.write(`<p> 2 x 5 = 10 </p>`);
document.write(`<p> 2 x 6 = 12 </p>`);
document.write(`<p> 2 x 7 = 14 </p>`);
document.write(`<p> 2 x 8 = 16 </p>`);
document.write(`<p> 2 x 9 = 18 </p>`);
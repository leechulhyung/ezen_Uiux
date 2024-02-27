/*
    1. 전역변수란 : 모든곳에서 사용 가능한 변수
            - 모든 {} 영역에서 사용 가능
            - 모든 곳에서 사용 가능
    2. 지역변수란 : 선언된 {중괄호(지역)}영역에서만 사용 가능한 변수
            - 선언된 {} 영역에서만 사용하고 {} 밖으로 못나감
            - 생성된 {} 영역에서만 사용 가능

*/
// 1. 전역변수
let 전역변수 = 10;
function test1(){ // 1. 함수정의/만들기
    document.write(`<p> 전역변수(안) : ${ 전역변수 } </p>`);
}
document.write(`<p> 전역변수(안) : ${ 전역변수 } </p>`);
    // 2. 함수호출
test1();

// 2. 지역변수
function test2(){ // 1. 함수정의/만들기
    let 지역변수 = 12;
    document.write(`<p> 지역변수(안) :  ${ 지역변수 } </p>`);
}
    // 2. 함수호출
test2();

// document.write(`<p> 지역변수(밖) : ${ 지역변수 } </p>`); // 오류

// P.82 1. 데이터를 반환하는 return문
function test3(){ // 함수만들기
    return '안녕 여기는 함수 내부입니다.'
}
let 결과3 = test3(); // 함수호출 후 return 값을 변수에 저장
document.write( 결과3 );

// P.82 2. 데이터를 반환하지 않고 함수 강제 종료 return문
function test4(){
    document.write(`<p>함수 내부1</p>`);
    return; // return 값; 값 생략시 함수 종료. [ return 아래 코드는 실행되지 않는다. ]
    document.write(`<p>함수 내부2</p>`); // 실행불가 : 이미 위에서 return 했기 때문에.
}
test4();

// 활용1 ) 
// 매개변수 2개를 받고
// 매개변수 2개를 더한 값을 리턴하는
// 'sum' 이라는 이름으로 함수 정의하고
// 'sum' 함수를 실행할때 10 , 5 대입해서 결과를 출력하시오.

function sum( num1 , num2 ){
    let sum = num1 + num2; // 함수가 처리하는 로직/코드
    return sum; // 함수가 종료될때 함수를 호출했던 곳으로 리턴값을 반환
} // f end
let sum결과 = sum( 10 , 5 );
document.write(`<p> ${ sum결과 } </p>`)

// 3. 함수 호출 재호출
let sum결과2 = sum( 100 , 500 );
document.write(`<p> ${ sum결과2 } </p>`)

// 1. 함수정의/만들기 = 만들때 사용되는 키워드 = function(){}
        // - 함수명은 임의로 사용 가능(웬만하면 영문으로)
        // - 숫자로 시작 X

// 2. 함수 호출 = 함수명(); = 리턴값이 있을 경우 변수에 저장

// 활용2)
    // 매개변수에 1개( 단 ) 받고, 해당 단의 구구단을 출력하시오.
    // 'gugudan' 이라는 이름으로 함수 정의하고
    // 'gugudan' 함수를 실행할때 3 매개변수로 전달하고 결과를 출력하시오.
    // 예) gugudan(3) 실행했을때 3단 구구단 출력.

function gugudan( 단 ){
    for( let 곱 = 1 ; 곱 <= 9 ; 곱++){
        document.write(`<p> ${ 단 } X ${ 곱 } = ${ 단*곱 }`);
    } //for end
    return;
} // f end

gugudan( 2 );
gugudan( 3 );
gugudan( 4 );
gugudan( 5 );
gugudan( 6 );
gugudan( 7 );
gugudan( 8 );
gugudan( 9 );

// 3. 단 입력받아 구구단 함수에 매개변수로 전달
let dan = prompt(`단 입력해주세요.`)
gugudan( dan );
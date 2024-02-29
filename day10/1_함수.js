/*
    변수 란 : 변하는 수
        - 상자에 미리 넣어둔 값/데이터 
        - let 변수명 = 값
    함수 란 : 함(상자) + 수(숫자)
        - 수가 들어있는 상자 => 누군가가 미리 상자에 미리 넣어둔 수
        - 누군가가 상자에 미리 넣어둔 코드 => 재활용을 위해
        - function 함수명( ){ 실행문; }
*/
// 1. 함수 정의/만들기
function test1(){ 
    // - 알림 메세지 창
    alert(`test1 함수 실행`);
}
// 2. 함수 실행
    // 1. JS에서 함수를 호출할때 함수명();
    // 2. HTML에서 함수를 호출할때 <마크업 onclick=="함수명()">
test1();

// - 1. 매개변수가 있는 함수
function test2( 매개변수1, 매개변수2 ){
    let 더하기 = 매개변수1 + 매개변수2;
    alert( 더하기 );
}
// - 2. 매개변수가 없는 함수
function test3(){
    alert(`test3 함수 실행`);
}
// - 3. 리턴이 있는 함수
function test4(){
    return; // 함수종료 : return 아래 코드는 실행이 되지 않는다.
    alert(`test4 함수 실행`)
}
// 활용
function 추가함수(){
    
    // 1. 문자 변수
    // let 메세지 = '<p>JS에서 작성된 문자열</p>'
    // let 메세지 = prompt(`입력`)
    let 메세지 = document.querySelector(`input`).value;

    // 2.
        // HTML에 있는 div를 식별해서 JS로 가져오기
            // document                : HTML을 뜻 함. DOM객체
            //   .querySelector(`div`) : 해당 HTML에서 식별자 호출
            //      .innerHTML         : <마크업> innerHTML </마크업>
            //         .value             : 입력 상자들의 현재 입력된 데이터     
    document.querySelector(`div`).innerHTML += 메세지;
        // = 대입연산자 : 오른쪽 데이터를 왼쪽에 대입
        // += 복합연산자 : 오른쪽 데이터를 왼쪽에 더한후에 대입(누적)
} // e end
/**
 * 함수 오버로딩
 * 자바스크립트는 지원 X
 * 타입스크립트는 지원 O
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값 출력
 */

// 각 함수 버전을 선언 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number) {
    console.log(a * 20);
}

// 오버로드된 파라미터는 선택적 프로퍼티를 적용해야지만 이전에 선언한
// 오버로드 시그니처를 사용할 수 있음
function func(a: number, b?: number, c?: number) {
    if(typeof b === 'number' && typeof c === 'number') {
        console.log(a + b+ c);
    } else {
        console.log(a * 20);
    }
}

// 이제 오버로드 시그니처를 선언한 함수는 호출시 구현부에 따르는것이 아님
// 오버로드 시그니처의 매개변수의 따라 호출이 가능함

func(1);
func(1, 2, 3);


/**
 * 함수 타입 표현식
 */

// 함수 머리부분만 선언하는 듯이 사용가능
type Operation = (a: number, b: number) => number;

// 선언한 함수타입 사용법
// 타입선언 중복없이 범용적으로 함수를 작성할 수 있는 문법
const add: Operation = (a, b) => a + b;
const sum: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;


/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
    (a: number, b:number): number;
}

const add2: Operation2 = (a, b) => a + b;
const sum2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;
/**
 * 제네릭
 * 범용적으로 사용할 수 있는 함수를 제네릭 함수라고 한다.
 */

// 제네릭 함수
// <T> 타입 변수
// 제네릭 함수 선언 방법
// function func<타입 변수> (value: 타입 변수): 타입 변수 {}
function func<T>(value: T): T {
    return value;
}

let num = func(10);
let bool = func(true);
let str = func("hello world");

// 호출자가 명시적으로 타입변수를 지정하여 호출하는 방법
let arr = func<[number, number, number]>([1, 2, 3]);
/**
 * 첫번째 사례
 */

// 타입을 하나로 정의 할 수 없을 경우 타입정의 구문에 다른 이니셜을 사용하여 타입을 좀 더 유연하게 사용할 수 있다.
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);


/**
 * 두번째 사례
 */

// 배열에도 제네릭을 적용하여 유연하게 메서드를 구성할 수 있다.
// 배열은 확실하지만 어떤 타입의 배열인지 알 수 없을 때 이렇게 정의하여 사용할 수 있다.
function returnFirstValue<T>(data: T[]) {
    return data[0];
}

// 이것은 리턴되는 값의 타입을 명확히 지정하고 싶을 때 사용할 수 있는 문법
// T는 배열에 처음 들어 오는 타입으로 저장되고
// 나머지 뒤에 담겨있는 값을 타입은 알 필요가 없으므로 ...unknown[] 으로 지정
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue(["hello", "mynameis"]);
// "hello"

/**
 * 세번째 사레
 */


// 이런식으로 타입 변수 T의 특정 속성이 있는 것을 명확히 구분하기 위해서
// extends 명령어 뒤에 타입변수 T의 특정속성을 명시적으로 적어주면 그에 맞는 타입만 받을 수 있다.
function getLength<T extends {length: number}>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("hello world"); // 11
let var3 = getLength({length : 10}); // 10 legnth의 값에 접근하여 리턴

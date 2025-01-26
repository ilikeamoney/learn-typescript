/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */

// | 를 사용해서 두 타입을 합집합으로 선언한 변수가 만들어짐
let a: string | number | boolean;
a = 1;
a = "hello"
a = true;

// 배열로도 선언 가능
let arr: (number | string | boolean)[] = [1, "hello", true];

type Cat = {
    name: string,
    color: string,
};

type Person = {
    name: string,
    language: string;
};

type Union1 = Cat | Person;

// Cat 집합에 포함됨
let union1: Union1 = {
    name: "",
    color: "",
};

// Person 집합에 포함됨
let union2: Union1 = {
    name: "",
    language: "",
};

// 교집합에 포함됨 (이유는 Intersection 을 타입으로 정의 할 수 있기 때문임)
// WebStorm 에서는 컴파일 오류가 남
//
let union3: Intersection = {
    name: "",
    language: "",
    color: "",
}

// 어느 집합에도 포함되지 않는 객체
// let union4: Union1 = {
//     name: "",
// };


//----------------------------------------------------------------------------------------------------------------------

/**
 * 2. 교집합 타입 - Intersection 타입
 * 두 객체에 공통으로 포함되는 프로퍼티만 사용가능
 */

let foo: number & string;

type Intersection = Cat & Person;

let intersection: Intersection = {
    name: "",
    color: "",
    language: "",
}

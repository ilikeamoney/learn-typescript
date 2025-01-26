/**
 * 타입 추론
 * 초기값을 기준으로 변수의 타입을 추론한다.
 */

// let 은 좀 더 범용적인 타입으로 추론해준다.
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "이정환",
    profile: {
        nickname: "winterlood",
    },
    url: ["https://www.google.com"],
};

// 구조분해 할당
let {name, id, profile} = c;
let [one, two, three] = [1, "hello", false];

// 함수는 리턴값으로 타입을 추론
// 파라미터 기본값도 타입 추론 가능
function func(message = "hello") {
    return "hello";
}

// 암묵적 any 타입 (any type 진화)
// 초기값 없이 변수를 사용하는것은 좋지 않음
let d;

// number 타입
d = 10;
d.toFixed();

// string 타입
d = "string";
d.toUpperCase();
d.toFixed();

// const 는 상수이기 때문에 넘버 리터럴 타입으로 추론된다.
const num = 10;
const str = "hello";

// 유니온 타입으로 추론
let arr = [1, "string"];
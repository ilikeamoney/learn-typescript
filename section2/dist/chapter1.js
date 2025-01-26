// 타입스크립트 원시타입
// 1.number
// 변수: number (변수 뒤에 콜론하고 타입을 선언하는 방법을 타입 주석 또는 타입 어노테이션이라고 한다.)
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// 2. string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
// 3.boolean
let bool1 = true;
let bool2 = false;
// 4.null
let null1 = null;
// 5. undefined
let unde1 = undefined;
// 6.리터럴 타입
// 값을 타입으로 지정해서 사용할 수 있다.
// 지정한 타입값 이외에 다른 값으로 재할당 불
let a = 10;
let b = "b";
let c = true;
export {};
// 현재 담아 둘 값이 없어서 부득히 null을 넣어야 할때 strictNullChecks 옵션을 false 하면 된다.
// let num8: number = null;

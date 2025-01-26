// any
// 특정 변수의 타입을 우리가 확실히 모른때 사용함

// 타입을 any 로 선언하면 원하는 타입 값으로 재할당 가능
// any 를 사용하면 기존 타입스크립트의 이점을 모두 포기하는 것이기 때문에 되도록이면 사용하지 않는다.
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

// 타입이 정해지지 않았기 때문에 다른 타입이 가지고 있는 함수 호출가능
anyVar.toUpperCase();
anyVar.toFixed()

// 타입이 정해지지 않아서 number 로 선언된 변수에 할당 가능
let num: number = anyVar;

//----------------------------------------------------------------------------------------------------------------------

// unknown
// 모든 타입의 값을 저장할 수 있다.
let unknownVar: unknown = 10;
unknownVar = "";
unknownVar = 100;
unknownVar = () => {};

// 하지만 다른 타입에 할당은 불가능 하다.
// 함수도 사용 불가
// num = unknownVar;
// unknownVar.upperCase;


// 조건문으로 typeof 연산자를 통해 확실히 타입이 정해지면
// 그 떄 할당 가능
// 함수도 사용 가능
// 이러한 문법을 타입 정제화라고 한다.
if (typeof unknownVar === "number") {
    num = unknownVar;
    unknownVar.toFixed();
}
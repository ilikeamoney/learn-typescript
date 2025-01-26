// void
// void -> 공허
// 아무것도 없음을 의미하는 타입이다.

// 반환하는 함수에도 리턴 타입을 선언가능
function func1(): string {
    return "hello"
}

// 리턴값이 없을때 void 를 사용할 수 있다.
const func2 = (): void => {
    console.log("hello")
}

// void 로 선언한 변수에는 어떤 값도 담을 수 없다.
// 하지만 tsconfig.json에 strictNullChecks 옵션을 false로 한다면 null, undefined 를 할당할 수 있음
let num: void;
// num = 1;
// num = "hello";
// num = true;
// num = null;


// 함수 리턴 타입이 undefined, null 이라면 return 에 명시적으로 반환해야 한다.
// 하지만 void 에서는 그런거 없이도 사용할 수 있다.
const func3 = (): undefined => {
    return undefined;
}

function func4(): null {
    return null;
}


//----------------------------------------------------------------------------------------------------------------------

// never
// never -> 존재하지 않는, 불가능한 타입
// 프로그램 로직상 무한 루프거나 리턴타입이 생기지 않을때 사용한다.

function func5(): never {
    while (true) {}
}

const func6 = (): never => {
    throw new Error();
}

// never 타입으로 선언된 변수는 어떠한 값도 담을 수 없음
let a: never;
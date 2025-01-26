/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => {
    return a + b;
}

/**
 * 함수의 매겨변수
 */

// 필수적 매개변수, 선택적 매개변수(?)를 사용할때 반드시 선택적 매개변수가 뒤에 선언 되어 있어야 한다.
function introduce(name = "이정환", age: number, tall?: number) {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
}

introduce("이정환", 27, 175);
introduce("이정환", 27);

// 가변길이의 파라미터를 전달할때 사용 (자바에도 있음)
function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

// 고정 길이로 전달하고 싶으면 튜플 타입을 사용해야한다.
function getSum2(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum2(1, 2, 3) // 6
getSum(1, 2, 3, 4, 5) // 15
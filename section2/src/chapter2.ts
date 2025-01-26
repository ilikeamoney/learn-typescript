// 배열

// 숫자형 배열
let numArr: number[] = [1, 2, 3];

// 문자형 배열
let strArr: string[] = ["hello", "im", "winter"];

// 제네릭으로도 선언할 수 있다.
let boolArr: Array<boolean> = [true, false, true];

// 다중 타입 배열을 선언할 때 (유니온 타입)
let multiArr: (string | number)[] = ["hello", 123, "wow"];

// 다차원 배열의 타입을 정의
let twoArr: number[][] = [
    [1, 2, 3],
    [3, 4, 5],
]

// 튜플 (길이와 타입이 고정된 배열)
let tub1: [number, number] = [1, 2];

// 각기 다른 타입으로 선언도 가능하다.
let tub2: [boolean, number, string] = [false, 123, "123"];

// 튜플 타입에 사용 예제
const users: [string, number][] = [
    ["김아무개", 1],
    ["최아무개", 2],
    ["이아무개", 3],
    ["박아무개", 4],
]
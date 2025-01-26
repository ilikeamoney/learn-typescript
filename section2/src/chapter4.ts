// 타입 별칭
// 코드의 중복을 제거하기위해 타입을 재사용 (같은 스코프 안에서는 재정의 X)
// 타입을 선언하는 방법
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
};

// 타입을 사용하는 방법
let user1: User = {
    id: 123,
    name: "hello",
    nickname: "wow",
    birth: "1989-08-01",
}

let user2: User = {
    id: 123,
    name: "hello",
    nickname: "wow",
    birth: "1989-08-01",
}

//----------------------------------------------------------------------------------------------------------------------

// 인덱스 시그니처
// Key, Value 에 규칙을 가지고 타입을 선언
// 타입 별칭 속성에 특정 패턴이 있다면 재정의 하지않고 사용할 수 있는 문법
// 규칙을 위배하지만 않으면 컴파일 오류가 나지 않는다.
// 인덱스 시그니처의 value 타입과 재정의한 value 타입이 다르다면 컴파일 오류가 발생한다.
type CountryCodes = {
    [key: string] : string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
}

type CountryNumberCodes = {
    [key: string]: number;
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}
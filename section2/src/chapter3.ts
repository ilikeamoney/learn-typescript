// 객체

// 객체 리터럴 타입
// 구조적 타입 시스템
// Property Based System
let user: {
    id?: number; // 선택적 프로퍼티 (Optional Property) 있어도 되고 없어도 되는 속성
    name: string;
} = {
    id: 1,
    name: "wow",
};

let dog: {
    name: string;
    color: string;
} = {
    name: "똘이",
    color: "white",
};

user = {
    id: 1,
    name:"홍길동",
};

let config: {
    readonly apikey: string; // 읽기 전용 데이터로 속성을 정의해서 재할당이 불가하게 선언할 수 있다.
} = {
    apikey: "my api key",
}


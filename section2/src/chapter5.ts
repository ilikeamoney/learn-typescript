// enum 타입
// 여러가지 값들에 각각 이름을 열거해두고 사용하는 타입

// enum 선언 사용하는 방법
// 명시적으로 값을 넣어주지 않아도 위에서 부터 순서대로 값이 들어감
// enum 은 자바스크립트로 컴파일 되어도 사라지지 않는다.
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    korean = "ko",
    english = "en",
}

// 타입 별칭
// enum 으로도 타입 선언 가능하다.
type Member = {
    name: string;
    role: Role;
    language: string;
}

const user1: Member = {
    name: "이정환",
    role: Role.ADMIN,
    language: Language.korean
}
const user2: Member = {
    name: "이아무개",
    role: Role.USER,
    language: Language.english
}
const user3: Member = {
    name: "박아무개",
    role: Role.GUEST,
    language: Language.korean
}

console.log(user1, user2, user3)
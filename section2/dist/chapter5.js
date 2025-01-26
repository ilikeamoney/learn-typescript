// enum 타입
// 여러가지 값들에 각각 이름을 열거해두고 사용하는 타입
// enum 선언 사용하는 방법
// 명시적으로 값을 넣어주지 않아도 위에서 부터 순서대로 값이 들어감
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN,
    language: Language.korean
};
const user2 = {
    name: "이아무개",
    role: Role.USER,
    language: Language.english
};
const user3 = {
    name: "박아무개",
    role: Role.GUEST,
    language: Language.korean
};
console.log(user1, user2, user3);
export {};

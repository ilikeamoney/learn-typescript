/**
 * 맵드 타입
 */


interface User {
    id: number;
    name: string;
    age: number;
}

// key in 프로퍼티 | 이 절은 해당 프로퍼티의 키를 선언하는 절이다.
// 그 옆에 User[key] 는 해당 key들의 값을 선언하는 절이다.
// 이렇게 key in 절이 끝나는 지점에 ? 를 선언하면 모든 프로퍼티가 선택적 프로퍼티로 바뀔 수 있다.
// 이는 대표적으로 특정 타입에 하나의 프로퍼티만 수정하고싶을 때 인수로 넣어야할 값의 선택적 프로퍼티를 편리하게 사용하기 위함으로 만들어진다.

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
}

type BooleanUser = {
    [key in 'id' | 'name' | 'age']?: boolean;
}

// 이렇게 해당 타입의 프로퍼티가 많아 정의하기 힘들다면 keyof 연산자를 사용하여 유연하게 확장할 수 있다.
type KeyOfUser = {
    [key in keyof User]?: boolean;
}

// 읽기 전용 타입을 만들고 싶을때 이런식으로 정의 가능
type ReadOnlyUser = {
    readonly [key in keyof User]: User[key];
}
// 아 이렇게 타입을 정의하고 바꾸고 싶은 프로퍼티의 값은 정의하고 함수의 인수로 전달하나보내?

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    // ... 기능
    return {
        id: 1,
        name: "james",
        age: 20,
    };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
    // ... 기능
}


/**
 * 제네릭 인터페이스
 */

// 인터페이스를 정의 할 때 타입변수를 사용하여 속성에 유연하게 타입을 부여할 수 있다.
interface KeyPair<K, V> {
    key: K;
    value: V;
}

// 실제 사용할 때 무조건 인터페이스에 제네릭 부분에 타입을 정의하고 사용하여야 한다.
let keyPair: KeyPair<string, number> = {
    key: "hello",
    value: 123,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
};

/**
 * 제네릭과 인덱스 시그니처 같이 사용하기
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap: NumberMap = {
    key: 123,
    key2: 456,
}

interface Map1<V> {
    [key: string]: V;
}

let stringMap: Map1<string> = {
    key: "value",
};

let booleanMap: Map1<boolean> = {
    key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: "hello world",
}

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생유저 / 개발자 유저
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    // 유저 인터페이스에 서로소 타입으로 다른 인터페이스를 속성으로 두고 있음
    // 하지만 이렇게 사용하는 것 보단 제네릭 타입으로 지정하면
    // User 생성시 타입을 넣어주기 때문에 따로 코드에서 타입 가드를 정의 하지 않아도 된다.
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 중`);
}

// 이런식으로 유연하게 인터페이스에 있는 타입을 사용할 수 이싿.
const developerUser: User<Developer> = {
    name: "hello",
    profile: {
        type: "developer",
        skill: "typeScript",
    }
};

const studentUser: User<Student> = {
    name: "hello",
    profile: {
        type: "student",
        school: "seoul univ",
    }
};














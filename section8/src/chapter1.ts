/**
 * keyof 연산
 */


interface Person {
    name: string;
    age: number;
}

/**
 * keyof 연산자는 타입의 프로퍼티의 값을 알고 싶은데 해당 타입에 프로퍼티가 너무 많아서 해당 함수의
 * 키 값을 게속 늘려야 하는 상황이 발생한다는 문제를 해결하기 위해 사용하는 문법이다.
 * 하기에 파라미터에 선언한 방식으로 사용하면 해당 타입에 프로퍼티값을 모두 유니온 타입으로 가지고 있다고 볼 수 있다.
 * 그리고 해당 타입에 새로운 프로퍼티가 추가된다 하더라도 코드를 수정할 필요가 없이 메서드도 유연하게 확장할 수 있다.
 * keyof 연산자는 프로퍼티의 값을 모두 유니온 타입으로 가지고 있어야 하기 때문에 무조건 타입에 위치해야 한다.
 */
function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "이정환",
    age: 20,
};

getPropertyKey(person, "name");
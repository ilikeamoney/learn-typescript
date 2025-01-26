/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 말함
 */

type Person = {
    name: string;
    age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Data : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {

    // typeGuard (특정 타입 이외에 들어오지 못하게 막는 문법)
    if (typeof value === 'number') {
        console.log(value.toFixed())
    } else if(typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if(value instanceof Date) {
        console.log(value.getTime());
    } else if(value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다`)
    }
}
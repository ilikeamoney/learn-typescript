/**
 * 인터페이스
 */

// 인터페이스는 union 이나 intersection 타입으로는 선언 불가
interface Person {
    // 읽기 전용 프로퍼티
    readonly name: string;

    // 선택적 프로퍼티
    age?: number;

    // 메서드 선언도 가능 (호출 시그니처 오버로딩)
    sayHi(): void;

    sayHi(a:number, b:number): void;
}



const person: Person = {
    name: "이정환",
    age: 27,
    sayHi: function() {
        console.log("Hi");
    }
}
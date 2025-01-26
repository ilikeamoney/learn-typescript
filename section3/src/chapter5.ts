/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

// 객체의 프로퍼티를 초기화하여 선언하지않고 나중에 초기화 해야할 상황이 생긴다면
// {} as type 으로 선언한다.
let person = {} as Person;
person.name = "wow";
person.age = 2;

type Dog = {
    name: string;
    color: string;
}

// 객체에 추가 프로퍼티를 할당하고 싶은데 타입의 구조를 바꾸고 싶지 않을때
let dog = {
    name: "뿌뿌",
    color: "brown",
    breed: "진도"
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

// ex1 (A number 가 B never 의 슈퍼타입)
let num1 = 10 as never;

// ex2 (A number 가 B unknown 의 서브타입)
let num2 = 10 as unknown;

// ex3 (A number 가 B string 에 포함 구조가 아님)
// let num3 = 10 as string;

// 다중 단언을 하면 포함구조가 아니어도 바꿀 수 있음 (좋은 방법은 아님)
let num3 = 10 as unknown as string;


/**
 * const 단언
 */

let num4 = 10 as const;

// 객체와 const 단언을 함께 사용하면 프로퍼티를 재할당 할 수 없는
// 읽기 전용 객체가 된다.
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;


/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글1",
    author: "안녕"
}

// ! 를 사용하면 null, undefined 이 아니라고 컴파일러에게 선언함
const len: number = post.author!.length;
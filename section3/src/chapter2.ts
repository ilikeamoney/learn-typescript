/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;


/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가 ?
 * 객체 타입은 프로퍼티에 따라 업캐스팅과 다운캐스팅 가능 유무를 가짐
 * 더 추상적인 타입이 슈퍼타입이 됨 (공통된 프로퍼티 수가 적은)
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "똘이",
    color: "brown",
    breed: "진도",
};

animal = dog; // animal 기준 업캐스팅은 가능
// dog = animal; animal 기준 다운 캐스팅은 불가

// 슈퍼타입
type Book = {
    name: string;
    price: number;
};

// 서브타입
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programming: ProgrammingBook = {
    name: "채식주의자",
    price: 5000,
    skill: "문학",
};

book = programming; // 가능
// programming = book 불가

/**
 * 초과 프로퍼티 검사
 * 객체를 초기화할때 타입에 정의하지않는 프로퍼티를 막음
 * 객체 타입에 정의된 프로퍼티만 사용가능
 */

let book2: Book = {
    name: "채식주의자",
    price: 5000,
}

// 이렇게 파라미터 타입이 정의 되어 있어도
// 업캐스팅으로 전달가능
const func = (book :Book): void => {
    console.log(book);
}

func(programming);
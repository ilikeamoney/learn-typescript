/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 *
 * 1. 반환값의 타입이 호환되는가.
 * 2. 매개변수의 타입이 호환되는가.
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

// 반환값 업캐스팅은 가능
a = b;

// 반환값끼리 다운캐스팅 X
// b = a;


// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d;
d = c;

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// 업캐스팅은 안됨
// 이용 불가 슈퍼타입은 서브타입의 프로퍼티를 할당 받지 않음 (메모리 주소가 없음, 접근할 수 없음)
animalFunc = dogFunc;

// 다운 캐스팅은 가능
// 자유롭게 프로퍼티에 접근 가능 왜냐하면 서브타입은 슈퍼타입의 프로퍼티를 가지고 있기 떄문 (메모리 주소가 이미 있기 때문)
dogFunc = animalFunc;

// 이유는 업캐스팅을 시키면 부모 타입에 프로퍼티에 없는 값이 생길 수 있기 때문임 하지만 다운 캐스팅은
// 기존 프로퍼티를 모두 가지고 있다는 가정이 되기 때문에 오류가 나지않음


// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

// 가능 왜냐하면 매겨변수 타입이 같고 갯수도 포함하고 있으므로
// 메모리에 할당가능하다.
func1 = func2;

// 불가능 왜냐하면 func2에는 하나의 매개변수를 받을 메모리가 할당되지 않았기 때문에
// func2 = func1;
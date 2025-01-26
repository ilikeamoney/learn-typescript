/**
 * 인터페이스의 확장 (상속)
 */

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

const animal: Animal = {
    name: "wow",
    age: 10,
}
const dog: Dog = {
    name: "wow",
    age: 12,
    isBark: true,
}

// 아까랑 마찬가지로 다운 캐스팅은 가능함
// 서브 타입은 슈퍼타입의 프로퍼티를 모두 가지고 있다고 가정
// animal = dog;

// 업캐스팅은 불가 이유는 슈퍼타입은 서브타입의 프로퍼티를 가지고 있지 않다고 가정
// dog = animal;


// 다중 상속도 가능하다.
interface DogCat extends Dog, Cat {

}

const dogCat: DogCat = {
    name: "",
    age: 0,
    isBark: true,
    isScratch: true,
}

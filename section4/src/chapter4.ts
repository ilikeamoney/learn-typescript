/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

// 리턴 타입이 참이라면 무조건 Dog를 반환한다고 선언함
function isDog(animal: Animal): animal is Dog {
    // 여기서 타입을 Dog로 바꿈
    // isBark 정의 되어있으면 true 반환
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function waring(animal: Animal) {
    if (isDog(animal)) {
        // 강아지
        animal;
    } else if(isCat(animal)) {
        // 고양이
        animal;
    }
}
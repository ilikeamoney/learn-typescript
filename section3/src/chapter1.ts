/**
 * Unknown 타입 (집합의 최상위 계층, 전체 집합)
 */
function unknownExam() {
    // 모든 타입에 부모이기 때문에 어떤 타입이든 업캐스팅이 가능
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
    let f: unknown = function (): number {
        return 0;
    }

    // 반대로 다운 캐스팅은 할 수 없음
    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입 (공집합)
 * 전체 집합의 부분집합
 */
const neverExam = () => {

    // return 값이 아무것도 없는 즉 공집합일때 명시적으로 사용
    function neverFunc(): never {
        while(true) {};
    }

    // never 타입은 모든 타입의 서브타입이기 때문에
    // 어떤 타입으로도 업캐스팅이 가능하다.
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 반대로 다운 캐스팅은 불가능 (슈퍼타입이 서브타입에 할당 불가)
    let ne:never;

    // ne = 10;
    // ne = "string";
    // ne = true;
}


/**
 * void 타입
 */
const voidExam = (): void => {
    function voidFunc(): void {
        console.log("hi")
    }

    // void 는 undefined 에 슈퍼타입이기 떄문에 업캐스팅이 가능하다.
    let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
    // any 타입은 타입 계층도를 무시할 수 있다.
    // any 타입에 슈퍼 타입을 할당 할 수도 있고
    // 자기 자신의 서브타입에도 자신을 할당할 수 있다.
    // 규칙을 모두 위배하는 타입이 any 타입이기 때문에 사용하기 위험하다.

    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // never 타입은 공집합이기 때문에 any 타입도 할당할 수 없다.
    neverVar = anyVar;
}
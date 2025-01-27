/**
 * 제네릭 클래스
 */


/**
 * 클래스로 타입변수를 사용하면 생성자에 타입변수를 두어
 * 호출시 생성자 파라미터에 넘기는 변수의 타입에 따라 타입변수가 정의 되므로
 * 이전 명시적으로 타입변수를 선언하는 것을 생략할 수 있다.
 */
class List<T> {
    // 이렇게 생성하면 필드에 선언 초기화를 생략 가능하다.
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["hello", "world"]);
stringList.pop();
stringList.push("wow");
stringList.print();
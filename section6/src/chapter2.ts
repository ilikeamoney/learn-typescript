/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

// 클래스 정의
class Employee {
    // public 접근 제어자는 모든 경로에서 접근이 가능하다.
    // private 접근 제어자는 클래스 내부에서 접근이 가능하다. 파생클래스 내부에도 접근이 불가하다.
    // protected 접근 제어자는 클래스 내부, 파생 클래스 내부에서 접근이 가능하다.

    // private name: string;
    // protected age: number;
    // public position: string;


    // 생성자에서 접근 제어자를 사용하는 경우 this 초기화를 생략 할 수 있다.
    // 그리고 필드에서의 정의도 생략할 수 있다.
    constructor(private name: string, protected age: number, public position: string) {}

    work() {
        console.log("일함");
    }
}

const employee = new Employee("이정환", 27, "개발자");
// employee.name = "wow";
// employee.age = 20;
employee.position = "세무사";
console.log(employee);



/**
 * 인터페이스와 클래스
 */

// 인터페이스에 정의한 필드는 무조건 public 으로 접근제어자가 지정된다.
// 또 다른 접근제어자가 필요한 경우 implements 하는 클래스에서 따로 지정해야 한다.
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface{

    // 이렇게 생성자에 접근제어자 달아서 선언하면 필드선언 및 초기화를 생략 가능하다.
    constructor(public name: string, public moveSpeed: number) {}

    move(): void {
        console.log(`${this.moveSpeed}만큼 이동 중`);
    }
}
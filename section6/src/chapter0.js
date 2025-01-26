/**
 * 클래스
 */

let studentA = {
    name: "이정환",
    grade: "A+",
    age: 27,
    study() {
        console.log("열공 중");
    },
    introduce() {
        console.log("ㅎㅇㅎㅇ");
    },
}

class Student {
    // 필드 (멤버변수)
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("hard study");
    }

    introduce() {
        console.log("hello");
    }
}

// 상속
class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 중`);
    }
}

const studentDeveloper = new StudentDeveloper("wow", "b+", 25, "java");
studentDeveloper.programming();

// 클래스를 이용해 생성한 객체 -> 인스턴스
let student = new Student("hell", "A+", 20);
console.log(student);
student.study();
student.introduce();
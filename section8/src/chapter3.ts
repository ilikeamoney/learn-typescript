/**
 * 템플릿 리터럴 타입
 */

// 해당 타입의 프로퍼티를 조합하여 사용할 수 있음

type Color = "red" | "green" | "blue";
type Animal = "dog" | "cat" | "bird";

type ColorAnimal = `${Color} - ${Animal}`;

// 이런식으로 사용할 수 있음
const animal: ColorAnimal = 'blue - bird'

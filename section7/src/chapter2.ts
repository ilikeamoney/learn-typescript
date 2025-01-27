/**
 * map 메서드
 * call back 함수를 호출하여 원하는 작업 후 return 을 받음
 */


const arr = [1, 2, 3];

// map 함수를 통해서 각 이전 배열 요소들에 연산 작업을 한 뒤 새로운 배열로 반환 가능
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

// 파라미터로 받을 arr
// 특정 작업을 수행 할 callback 함수
// callback 함수에 파라미터도 타입을 알 수 없기 때문에 unknown 타입으로 정의
function map<T, U>(arr: T[], callback: (item: T) => U) {
    // 특정 작업을 수행한 뒤 리턴 받을 result 배열 선언
    let result = [];

    // 파라미터로 받은 arr 배열을 순회 하면서 callback 함수 호출
    for (let i = 0; i < arr.length; i++) {
        // result 에 담는다.
        result.push(
            callback(arr[i])
        );
    }
    // 반환
    return result;
}

map(arr, (it) => it * 2);
// 콜백 함수는 원래 입력된 타입에 구해 받지 않아야 하므로
// 타입 변수를 하나 더 선언해서 사용할 수 있다.
map(["hello", "world"], (it) => parseInt(it));

/**
 * foreach
 * 따로 리턴값은 받지 않고 순회
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback:(item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr2, (it) => {
    console.log(it.toFixed());
});

forEach(["hello", "world"], (it) => {
    console.log(it);
})
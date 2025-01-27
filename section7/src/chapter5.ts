/**
 * 프로미스
 */

/**
 * Promise 인터페이스에 제네릭 타입 변수 선언을 가능하게 했기 때문에
 * 타입이 명확하다면 생성자로 호출시 타입을 명시적으로 선언할 수 있고
 * resolve 에도 선언한 타입과 맞는 값을 인수로 전달해야 한다.
 */
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve 는 비동기 작업이 성공하여 데이터를 받아 올 때 호출함
        // 그리고 인수는 성공했을 때 전달하는 값

        // reject 는 비동기 작업이 실패했을 때 처리하는 값이고
        // 인수에는 실패한 이유를 전달 함
        // resolve(20);
        reject("~~ 때문에 실패");
    }, 3000);
});

// 성공시
promise.then((response) => {
    console.log(response * 10); // 200
});

// 실패시
promise.catch((err) => {
    // 성공시 타입 변수 정의를 통해 값을 전달 받을 수 있지만
    // 거절시에는 타입 좁히기를 사용하여 값을 전달 받아야 한다.
    // 보통은 문자열로 값을 많이 사용한다.
    if (typeof err === "string") {
        console.log(arr);
    }
});

/**
 * Promise 를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

// 이렇게 특정 타입의 Promise 객체를 받아야 할 때는
// 리턴 타입에 타입변수를 지정한 프로미스 선언을 사용한다.
function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "Hello World",
                content: "Hello World",
            });
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id;
});
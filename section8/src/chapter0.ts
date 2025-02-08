/**
 * 인덱스드 엑세스 타입
 *
 * 인덱스드 엑세스 타입은 배열, 튜플, 객체에 모두 사용이 가능하다.
 * 가지고 있는 요소를 특정 타입으로 맞춰서 사용할 수 있다
 * 이렇게 사용하면 확장성이 늘어나고 매개변수나 인수를 담을때 더 유연하고 정확하게 전달할 수 있다.
 */

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

// interface Post {
//     title: string;
//     content: string;
//     author: {
//         id: number;
//         name: string;
//         age: number;
//     };
// }


// 리스트 타입에서는 이런식으로 먼저 [] 괄호에 인덱스 번호 혹은 number 를 선언해서 요소를 가져오고
// 그 뒤에 [] 괄호에 접근해야할 타입을 사용할 수 있다.
function printAuthorInfo(author: PostList[number][`author`]) {
    console.log(`${author.id} - ${author.name}`);
}

// 이렇게 리스트 타입에서 [number]를 사용하면 요소 한개를 추출해서 사용할 수 있다고 생각하면 된다.
// 실제 [0, 1, 2, 3.....] 이렇게 사용하면 리스트 타입에 해당 요소를 추출해서 사용할 수 있다고 생각하면 된다.
// 마찬가지로 인덱스를 변수로 선언해서 해당 변수를 [] 안에 넣어서는 사용할 수 없다.
const post: PostList[number] = {
    title: "게시글 제목 1",
    content: "게시글 내용 1",
    author: {
        id: 1,
        name: "이정환",
        age: 20,
    }
}


/**
 * 해당 함수 파라미터에서 특정 타입에 객체를 인덱스로 찾아서 사용하는 모습을 본따
 *  인덱스드 엑세스 타입이라고 부른다.
 *
 *  주의해야할 점은 인덱스에 사용해야 할 변수는 반드시 스트링 리터럴 타입으로 해야한다.
 *  string 으로 변수를 담아서 사용할 수 없다
 *  인덱스로 사용하는 것은 타입이라는 것은 명심
 *
 *  또 해당 타입에서 원하는 프로퍼티를 가져와 선언하고 싶다면 []을 추가해서 해당 속성의
 *  명시된 이름을 사용하면 된다.
 */
// function printAuthorInfo(author: Post[`author`]) {
//     console.log(`${author.id} - ${author.name}`);
// }
//
// // post 에 id와 name 을 같이 출력해야 하는 상황
// const post: Post = {
//     title: "게시글 제목 1",
//     content: "게시글 내용 1",
//     author: {
//         id: 1,
//         name: "이정환",
//         age: 20,
//     }
// }


// 튜플 타입 사용하는 방법
// 이런식으로 해당 튜블 배열 인덱스에 접근해서 해당 튜플 타입을 사용할 수 있다.
type tup = [number, string, boolean];

type tup0 = tup[0]; // number

type tup1 = tup[1]; // string

type tup2 = tup[2]; // boolean

// type tup3 = tup[3]; 튜플은 길이가 고정된 자료형이기 때문에 인덱스를 초과하여 접근할 수 없음

// 이렇게 사용하면 해당 타입에 최고의 공통된 타입을 추출해서 사용할 수 있다.
type tup3 = tup[number];
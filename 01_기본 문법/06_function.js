// 아래 두 함수의 의미는 같음

function a() {
    console.log('a');
}

// function a() {
//     console.log('a');
//     return undefined; // 리턴값이 없을때는 undefined을 반환한다.
// }

a();

// 매개변수와 인수의 개수가 일치하지 않을때

// 매개변수 개수 > 인수 개수
function b (w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments); // arguments는 함수의 매개변수가 어떻게 들어있는지 출력해줌
}

b('a', 'b', 'c'); // 결과 -> a b c undefined

// 매개변수 개수 < 인수 개수

function c(x, y) {
    console.log(x, y);
}

c('a', 'b', 'c'); // 결과 -> a b


// 화살표 함수
const res1 = (x, y, z) => {return x * y * z};
console.log(res1(2, 3, 4));

// 함수를 인자로 받거나, 함수를 반환하는 함수를 고차 함수라고 한다.
const res2 = (msg) => {
    return () => {
        console.log(msg);
    }
}

// 아래와 같이 수정 가능
const res3 = (msg) => () => {
    console.log(msg);
}

res2("Hello, World!")();

res3("수정!")();

// 고차 함수 예제
const hof = (a) => (b) => (c) => {
    return a + (b * c);
}

const first = hof(3);
const second = first(4);
const third = second(5);
console.log(third);

console.log(hof(3)(4)(5));
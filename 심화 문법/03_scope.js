// 블록스코프, 함수스코프

const number = [1, 3, 5, 7];
for(let i=0; i<number.length; i++) { // 블록별로 i 변수의 값 고정 -> 콜백 실행시 i = 0, 1, 2, 3
    setTimeout(() => {
        console.log(i);
    }, 1000 * (i + 1));
} // 0 1 2 3

for(var i=0; i<number.length; i++) { // i=4가 된 뒤, setTimeout()이 실행됨 -> 콜백 실행시 i=4인 상태
    setTimeout(() => {
        console.log(i);
    }, 1000 * (i + 1));
} // 4 4 4 4

// for(var i=0; i<5; i++) {}
// i; // var은 함수스코프. 결과는 4

// for(let j=0; j<5; j++) {}
// j; // let은 블록스코프. 결과는 not defined


// 함수 스코프 설명1
function example() {
    var x = 10;
    console.log(x); // 가능
}

example();
console.log(x); // 오류! x는 함수 밖에서 접근 불가. 이렇게 외부 값에 접근함수를 클로저라고 한다. 

// 함수 스코프 설명2
if (true) {
    var a = 5;
}
console.log(a); // 5. 클로저W

for (var i = 0; i < 3; i++) {}
console.log(i); // 3 (for문 바깥에서도 접근 가능)

// forEach 이용
const num = [1, 3, 5, 7];
number.forEach((num, idx) => {
    setTimeout(() => {
        console.log(num);
    }, 1000 * (i + 1));
});

// switch문을 사용할때, 스코프를 꼭 알아야한다.
const type ='a';

switch(type) {
    case 'a': {
        let name = "1";
        break;
    }

    case 'b': {
        let name = "2";
        break;
    }

    case 'c': {
        let name = "3";
        break;
    }
}
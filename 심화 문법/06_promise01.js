// new promise : 비동기 작업을 감싸서 나중에 성공(resolve)하거나 실패(reject)로 결과를 알려주는 약속(Promise)을 만드는 것.
// Promise는 "나중에 결과를 알려줄게!"라는 약속 객체
// 동기냐 비동기냐는 중요하지 않고, "결과가 있으면 resolve(), 문제가 있으면 reject()를 호출"하면 되는 구조
// resolve, reject 각각의 이름은 정해진건 아님. 바꿀 수 있음.

const setTimeoutPromise = new Promise((resolve, reject) => { // setTimeoutPromise는 Promise 객체가 됨.
    setTimeout(() => { // setTimeout(resolve, 0); 이와 동일
        resolve(); // () => resolve()는 resolve 함수를 감싼 익명함수일뿐, 동작은 같음
    }, 0);
});

setTimeoutPromise.then(() => {
    console.log("0초 뒤 실행됩니다.");
});


// 좀 더 간결하게
const setTimeoutPromise2 = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

setTimeoutPromise2(3000).then(() => {
    console.log("3초 뒤에 실행됩니다.");
}); 




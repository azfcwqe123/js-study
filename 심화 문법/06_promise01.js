// new promise : 비동기 작업을 감싸서 나중에 성공(resolve)하거나 실패(reject)로 결과를 알려주는 약속(Promise)을 만드는 것.

const setTimeoutPromise = new Promise((resolve, reject) => { // setTimeoutPromise는 프로미스 객체가 됨.
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

// 예제1

const setTimeoutPromise3 = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

const promise3 = setTimeoutPromise3(0);

console.log("다른 일을 하다가");
console.log("필요할 때");
console.log("then을 호출해보세요.");

promise3.then(() => {
    console.log("0초 뒤 실행");
});

promise3.catch((err) => {
    console.log("에러 발생시 실행됩니다.");
})
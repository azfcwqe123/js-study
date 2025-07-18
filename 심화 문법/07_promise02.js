// 예제1
const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

const promise = setTimeoutPromise(3000);

console.log("다른 일을 하다가");
console.log("필요할 때");
console.log("then을 호출해보세요.");

promise.then(() => {
    console.log("3초 뒤 실행");
});

promise.catch((err) => {
    console.log("에러 발생시 실행됩니다.");
})
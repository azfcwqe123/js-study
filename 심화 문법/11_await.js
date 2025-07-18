
// 코드의 의도는 프로미스 콜백 함수를 먼저 실행하게 하는거지만, 밑에 있는 console.log()가 먼저 실행된다.
/*const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

setTimeoutPromise(1000).then(() => {
    console.log("1초 뒤에 실행됩니다.");
});

console.log("먼저 실행됨");*/

// 기존의 의도대로 하려면?

const setTimeoutPromise2 = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

await setTimeoutPromise2(1000).then(() => {
    console.log("1초 뒤에 실행됩니다.");
});

console.log("먼저 실행됨");

// await은 프로미스가 resolve() 할 때까지 기다린다.
// 프로미스가 아닌 비동기 코드에 await을 적용하는것은 의미 없음. 적용되지 않음.
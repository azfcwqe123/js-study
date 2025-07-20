// setInterval(): 반복 기능 수행. 비동기 함수

const timerId = setInterval(() => {
    console.log("반복");
}, 2000);

clearInterval(timerId)// setInterval() 취소 함수

// 문제1
function func() {
    console.log("hello");
}

setTimeout(func, 3500);

// 문제2

const intervalId = setInterval(() => {
    console.log("2초마다 실행됩니다.");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);

// 문제3, setInterval()과 같은 효과를 내게함.
const log = () => {
    console.log("hello");
    setTimeout(log, 1000); // 재귀 구조
};
setTimeout(log, 1000); // 최초 1회 시작
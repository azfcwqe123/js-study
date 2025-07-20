// setTimeOut : 지정한 시간 뒤에 코드가 실행되게 함. 비동기 함수

// 방법1
setTimeout(() => {
    console.log("2초 후에 실행됩니다.");
}, 2000); // 2000ms

// 방법2
const callback = () => {
    console.log("4초 후에 실행됩니다.")
}
setTimeout(callback, 4000);

// 동기, 비동기 이해
const timerId = setTimeout(() => {
    console.log("0초 뒤에 실행됩니다.");
}, 0);

// setTimeOut()은 비동기함수이므로, 밑에 있는 동기 코드가 모두 실행되고 난 뒤 실행된다.
console.log("함수 실행");
clearTimeout(timerId); // 동기 함수 실행중, setTimeout() 실행 취소 함수를 만나 비동기 함수인 timeId은 실행되지 않음.
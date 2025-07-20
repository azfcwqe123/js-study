const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
})

const promise = setTimeoutPromise(2000);

promise
    .then(() => {
        console.log("2초 뒤에 실행됩니다.");
    })
    .catch((err) => {
        console.log("에러 발생시 실행됩니다.");
    })
    .finally((err) => {
        console.log("성공이든 실패든 무조건 실행됩니다.");
    });
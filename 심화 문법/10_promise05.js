const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("나는 나중에");
    }, 0);
    resolve();
})

promise.then(() => {
    console.log("내가 먼저");
});

// 내가 먼저
// 나는 나중에

// 태스크 큐에 있는 프로미스 콜백 함수는 프로미스가 아닌 콜백 함수보다 먼저 호출 스택으로 올라감.
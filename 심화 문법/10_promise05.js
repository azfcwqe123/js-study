const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("나는 나중에");
    }, 0);
    resolve();
})

promise.then(() => {
    console.log("내가 먼저");
});
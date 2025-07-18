const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

const main = async() => {
    await setTimeoutPromise(1000);
    console.log("1초 뒤에 실행됩니다.");
}

main();
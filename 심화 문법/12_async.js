const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

async function main() {
    await setTimeoutPromise(2000);
    console.log("2초 뒤에 실행됩니다.");
    console.log("내가 나중에");
}

main();
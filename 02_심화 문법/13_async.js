const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

async function main() {
    await setTimeoutPromise(2000);
    console.log("2초 뒤에 실행됩니다.");
    console.log("내가 나중에");
}

main();

// await은 async 함수에서 사용할 수 있음. function 앞에 async가 붙지 않으면 작동하지 않음.
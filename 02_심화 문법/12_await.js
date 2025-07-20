const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

// then() 체이닝은 하나하나가 내부적으로 await과 같은 방식으로 작동
setTimeoutPromise(0)
    .then(() => {
        return 'a';
    })
    .then((data1) => {
        console.log(data1); // a
        return 'b';
    })
    .then((data2) => {
        console.log(data2); // b
    });


// 아래 코드와 동일

await setTimeoutPromise(0);

const data1 = await 'a'; // Promise.resolve(값)을 자동 호출
// await Promise.resolve('a'); // 즉시 성공 → data1 = 'a'

console.log(data1);
const data2 = await 'b';
console.log(data2);
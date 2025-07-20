const p1 = new Promise((resolve, reject) => {
    reject("에러!");
});

try {
    await p1;
} catch {
    console.log("에러인 경우");
} finally {
    console.log("성공이든 에러든 마지막에 실행");
}

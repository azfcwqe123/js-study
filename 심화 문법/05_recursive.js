let i = 0;

// 호출 스택이 터져버림.
// function recurse() {
//     i++;
//     recurse();
// }

// 호출 스택의 최대 크기를 초과하지 않게 하려면?

function recurse() {
    i++;
    if(i > 200) {
        console.log("결과: " + i);
        return;
    }
    setTimeout(recurse, 0); // 현재 호출 스택이 비워지고 나서 실행됨 -> 호출 스택에 recurse()가 2개 이상 쌓이지 않게됨
}

recurse();

//console.log(i); // 1이 출력됨. set
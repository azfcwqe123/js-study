// 2차원 배열 초기화, 출력
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// 4행 2열
const arr2 = [
    ['a', null],
    [1, undefined],
    [NaN, true],
    ['', 0]
];

console.log(arr2);

// for문으로 2차원 배열 만들기

const arr3 = [];

for(let i = 0; i < 5; i++) {
    const innerArray = [];
    for(let j = 0; j < 4; j++) {
        innerArray.push(10);
    }
    arr3.push(innerArray);
}

console.log(arr3);

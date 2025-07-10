// 배열 자르고 합치기 - slice()
const arr = [1, 2, 3, 4, 5];

const sliceArr = arr.slice(1, 3); // [2, 3]
console.log(sliceArr);

// 배열 합치기 - concat()
const concatArr = arr.concat([6, 7, 8]);
console.log(concatArr);

// indexOf()와 splice()을 이용해 배열에 있는 '라' 모두 제거
const arr2 = ['가', '라', '다', '라', '마'];

let idx = arr2.indexOf('라');

while(idx !== -1) {
    arr2.splice(idx, 1);  // 중간에 있는 배열을 삭제하는 방법
    idx = arr2.indexOf('라');
}

console.log(arr2);
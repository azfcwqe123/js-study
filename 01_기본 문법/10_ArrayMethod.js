// sort()
const arr = [1, 5, 4, 2, 3];
arr.sort((a, b) => a - b); // 오름차순
console.log(arr);
 
const copyArr = [...arr]; // 얕은 복사
copyArr.sort((a, b) => b - a); // 내림차순
console.log(copyArr);

// reduce(), 누적값, 0이 없다면 초기 누적값은 1, 현재값은 2가 됨. 0이 있다면 초기 누적값은 0, 현재값 1

let res = [1, 2, 3, 4, 5].reduce((a, c) => a + c, 0); // a = 누적값, c = 현재값, a + c = 반환값
console.log(res);

// every() : 배열에서 모든 요소가 조건에 해당하는지
// some() : 배열에서 하나라도 조건에 해당하는지

const arr2 = [1, 3, 5, 7];

arr2.every((v) => v !== null); // true;

arr2.every((v) => v === null) // false;

const arr3 = [1, 3, null, 7];

arr3.some((v) => v === null) // true;
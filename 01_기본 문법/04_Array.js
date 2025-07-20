// flat() -> n차원 배열을 n-1차원으로
const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr1.flat());

const arr2 = [1, 2, 3, [[4, 5, 6], [7, 8, 9]]];
console.log(arr2.flat());

// Array()으로 배열 생성

const arr3 = Array(10) // 길이가 10인 배열 생성
console.log(arr3);

// fill()으로 요소 채우기
arr3.fill(10);
console.log(arr3);

// new Set() -> 중복 제거 후 Set으로 만듦.
const arr4 = [1, 2, 2, 2, 3, 4, 4, 5];

const setArr = new Set(arr4);
console.log(setArr); // Set 상태

const recoverArr = Array.from(setArr); // Array.from() -> 배열로
console.log(recoverArr); // 배열 상태


// 문자열을 배열로 
const arr5 = Array.from('123'); // Array.from() -> 배열로
console.log(arr5);
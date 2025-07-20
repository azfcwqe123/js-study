const arr = ['가', '나', '다', '라', '마'];

// splice() -> 중간 요소 삭제

arr.splice(1, 1); // 인덱스 1부터 1개 삭제
console.log(arr);

arr.splice(2, 2); // 인덱스 2부터 2개 삭제
console.log(arr);

arr.splice(0);
console.log(arr); // 인덱스 0부터 배열 끝까지 삭제


const arr2 = ['가', '나', '다', '라', '마'];

arr2.splice(1, 3, '바', '사'); // 인덱스 1부터 3개 삭제 후, '바', '사' 삽입
console.log(arr2);

// 배열 요소 찾기 - includes(), true/false 반환
const res1 = arr2.includes('가');
console.log(res1); // true

const res2 = arr2.includes('하');
console.log(res2); // false

// 배열 요소 위치 찾기 - indexOf()
const res3 = arr2.indexOf('가');
console.log('(가)의 위치는: ' + res3);

const res4 = arr2.indexOf('마');
console.log('(마)의 위치는: ' + res4);



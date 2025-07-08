// const로 선언한 변수에는 새로운 값을 대입하진 못함.
// const에 객체(배열, 함수, 객체 리터럴)가 대입되면 내부의 속성은 변경 가능
const arr = ['a', 'b', 'c', 'd', 'e'];

arr[0] = '가';
// arr.at(0) = '가'; 불가능

// 접근
console.log(arr[0]); // 'a'
console.log(arr.at(0)); // 'a'

// 뒤에서부터 접근
console.log(arr[arr.length - 2]);
console.log(arr.at(-2));

// 맨 앞에 요소 추가
arr.unshift('front');
console.log(arr);

// 맨 뒤에 요소 추가
arr.push('end');
console.log(arr);

// 맨 앞 요소 삭제 
arr.shift();
console.log(arr);

// 맨 뒤 요소 삭제
arr.pop();
console.log(arr);




const arr = [1, 2, 3, 4];

// 사용하지 않는 매개변수는 생략 가능
arr.forEach((num, idx) => {
    console.log(num + " " + idx);
})

// map - 1
const numbers = Array(5).fill(1).map((v, i) => i + 1);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// map - 2
const numbers2 = arr.map((v, i) => v * 2); // 중괄호 없이 쓰면 return은 자동으로 생략됨.
console.log(numbers2); // [ 2, 4, 6, 8 ]
// const numbers2 = arr.map((v, i) => {
//     return v * 2;
// });


// map - 3
const arr2 = [1, 2, 3, 4, 5];
const numbers3 = arr2.map((_, i) => i * 2 + 3);
console.log(numbers3); // [ 3, 5, 7, 9, 11 ]


// find(). true인 요소가 여러개일 경우 처음 찾은 요소를 반환
const arr3 = [1, 3, 5, 7];
const numbers4 = arr3.find((v, i) => v > 1);
console.log(numbers4); // 3

// findIndex(). 찾은 요소의 인덱스를 반환
const arr4 = [1, 3, 5, 7];
const numbers5 = arr3.findIndex((v) => v > 1);
console.log(numbers5); // 1

// filter(). 조건에 맞는 배열들을 골라냄
const arr5 = [1, 3, 5, 7];
const numbers6 = arr5.filter((v) => v > 1);
console.log(numbers6); // [ 3, 5, 7 ]


// find() 메서드를 for문으로 만들기
// find([1, 3, 5, 7], (v, i) => v > 1); // 3

const arr6 = [1, 3, 5, 7];

// callback 함수
function callback(v) {
    return v > 2;
}

const find = (arr6, callback) => {
   for(let i=0; i<arr6.length; i++) {
        if(callback(arr6[i])) return arr6[i];
   } 
};
console.log(find(arr6, callback));

// filter() 메서드를 for문으로 만들기
const arr7 = [1, 3, 5, 7];

const filter = (arr7, callback) => {
    const result = [];

    for(let i=0; i<arr7.length; i++) {
        if(callback(arr7[i])) result.push(arr7[i]);
    }
    return result;
};
console.log(filter(arr7, callback));


// 참조와 복사

const a = {name: 'A'};
const b = a; // a와 b가 같은 객체를 참조

console.log(b.name);
a.name = 'B';
console.log(b.name); // a를 바꿨더니 b도 바뀜. 같은 객체를 참조하기 때문

// 얕은 복사 -> ..., concat, slice
const arr = [{a: '1'}, {b: '2'}];
const copyArr = [...arr]; // ...은 얕은 복사 연산자
arr[0].a = 10; // 이렇게하면 copyArr[0].a도 바뀜.

console.log(arr === copyArr); // false
console.log(arr[0] === copyArr[0]); // true

// 깊은 복사 -> 내부 객체까지 참조 관계가 모두 끊김.

const arr2 = [{c: '3'}, {d: '4'}];
const deep = JSON.parse(JSON.stringify(arr2)); // stringify: 객체를 문자열로, parse: 문자열을 객체로

console.log(arr2 === deep); // false
console.log(arr2[0] === deep[0]); // false

// 구조 분해 할당!!
const obj = {
    t1: 10,
    t2: 20
};

const {t1, t2} = obj; // (객체는 이름일치 필요함).
console.log(t1 + " " + t2);

// 배열도 가능 (배열은 이름일치 필요 없음)
const arr3 = [1, 2, 3];
const[one, two, three] = arr3;
console.log(one + " " + two + " " + three);

// 구조 분해 문제

const obj2 = {
    r1: 'hello',
    r2: {
        r3: 'hi',
        r4: {r5: 'wow'},
    }
};

// 만약 r2도 같이 쓰고 싶다면?
// const { r1, r2, r2: { r3, r4: { r5 } } } = obj2;
const {r1, r2:{r3, r4: {r5}}} = obj2;

console.log(r3);
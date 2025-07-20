// 객체 생성 - 1
const person = {
    name: 'AAA',
    age: 10,
};

console.log(person.name + " " + person.age);
console.log(person['name'] + " " + person['age']);

// 객체 생성 - 2
const name = 'BBB';
const age = 30;

const person2 = {name, age};
console.log(person2.name + " " + person2.age);

// 메서드
const person3 = {
    name: 'CCC',
    age: 40,
    
    eat: function(menu) { // eat 메서드
        console.log(menu + "을 먹습니다.");
    }
}

person3.eat("치킨");

// 중첩된 객체
const family = [
    { name: 'A', age: 1, gender: '남'},
    { name: 'B', age: 2, gender: '남'},
    { name: 'C', age: 3, gender: '여'},
];

for(let i = 0; i<family.length; i++) {
    console.log(family[i].name + " " + family[i].age + " " + family[i].gender);
}

// 옵셔널 체이닝 연산자 (객체에 어떤 속성이 있을지 모를때 사용하는 연산자. 에러가 발생하는것을 막아줌)

console.log(family[0]?.age);
console.log(family[0]?.height);



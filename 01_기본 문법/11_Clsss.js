class Person {
    constructor(hp, name, age) {
        this.hp = hp;
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("name: " + this.name + ", age: " + this.age);
    }

    attack(person) {
        person.hp -= 10;
    }
}

const person1 = new Person(100, "A", 25);
const person2 = new Person(100, "B", 20);

person1.sayHello();
person1.attack(person2);

console.log("person2가 공격 당한 이후 hp: " + person2.hp);

// 상속

class Unit {
    constructor(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    attack(target) {
        target.hp -= this.attack;
    }
}

class Hero extends Unit {
    constructor(name, hp, attack) {
        super(name, hp, attack);
        this.maxHp = hp; // 그 외 속성
    }

    attack(target) {
        super.attack(target); // 부모 클래스의 attack() 호출
    }

    heal() {
        this.hp = this.maxHp; // 자식 클래스의 동작
    }
}
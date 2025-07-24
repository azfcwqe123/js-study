고차 함수 : 호출하면 함수 반환, 클릭 시 실행

일반 함수 : 호출 즉시 실행돼서 의도치않게 됨.

---

### 고차 함수 사용
```js
const onClickNumber = (number) => () => {
    if(operator) numTwo += number;
    else numOne += number;

    $result.value += number;
};
```

---

### 일반 함수, 고차 함수 사용
```js
button.addEventListener('click', onClickNumber(1)); // 함수에 ()가 붙어있으면? 그 순간 바로 실행. 이벤트 핸들러X. 일반함수든 고차함수든 똑같음

button.addEventListener('click', onClickNumber); // () 없이 이름만 넘기면? "브라우저가 클릭하면 실행하겠다는 뜻". 일반함수든 고차함수든 똑같음

button.addEventListener('click', () => onClickNumber(1)); // 즉시 실행되지 않게 하기 위한 우회 방법. 일반함수든 고차함수든 똑같음
```

---

### 스크립트 실행 과정

```js
const onClickOperator = (op) => () => {
    ...
}

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
```

1. 스크립트가 실행되자마자 onClickOperator('+')는 한 번 실행됩니다.

2. 이때 op에 '+'가 들어가고, () => { ... } 형태의 함수 객체가 반환됩니다.

3. 그 반환된 함수를 addEventListener가 이벤트 핸들러로 등록합니다.

4. 이후 클릭하면, 그 함수가 실행되며 '+' 연산이 내부 로직에서 사용됩니다
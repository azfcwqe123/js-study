// 고차 함수 : 호출하면 함수 반환, 클릭 시 실행

// 일반 함수 : 호출 즉시 실행돼서 의도치않게 됨.

고차 함수 사용, 중요!

/*const onClickNumber = (number) => () => {
    if(operator) numTwo += number;
    else numOne += number;

    $result.value += number;
};*/ 

---

// button.addEventListener('click', onClickNumber(1)); : 함수에 ()가 붙어있으면? 그 순간 바로 싱행. 이벤트 핸들러X

// button.addEventListener('click', onClickNumber); : () 없이 이름만 넘기면? "브라우저가 클릭하면 실행하겠다는 뜻"

// button.addEventListener('click', () => onClickNumber(1)); : 즉시 실행되지 않게 하기 위한 우회 방법
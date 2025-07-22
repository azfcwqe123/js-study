let numOne = ''; // 첫번째 피연산자
let operator = '';
let numTwo = ''; // 두번째 피연산자

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

// 고차 함수 : 호출하면 함수 반환, 클릭 시 실행
// 일반 함수 : 호출 즉시 실행돼서 의도치않게 됨.

// 고차 함수 사용, 중요!
/*const onClickNumber = (number) => () => {
    if(operator) numTwo += number;
    else numOne += number;

    $result.value += number;
};*/ 

// 이벤트 핸들러 함수, 고차 함수처럼 "나중에 실행"되는 효과가 있음
const onClickNumber = (event) => {
    // 연산자가 없는 경우: numOne 변수 시작
    if(!operator) {
        numOne += event.target.textContent; // 첫번째 피연산자 작성
        $result.value += event.target.textContent; // 연산 창에 보이게 함
        return;
    }

    // 연산자가 있는 경우: numTwo 변수 시작
    if(!numTwo) { // numTwo가 비어있을 경우
        $result.value = ''; // 연산 실행 창을 비운다.
    }

    numTwo += event.target.textContent; // 두번째 피연산자 작성
    $result.value += event.target.textContent; // 연산 창에 보이게 함
}

// button.addEventListener('click', onClickNumber(1)); : 함수에 ()가 붙어있으면? 그 순간 바로 싱행. 이벤트 핸들러X
// button.addEventListener('click', onClickNumber); : () 없이 이름만 넘기면? "브라우저가 클릭하면 실행하겠다는 뜻"
// button.addEventListener('click', () => onClickNumber(1)); : 즉시 실행되지 않게 하기 위한 우회 방법


document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
    if(numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
}

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
    if(numTwo) {
        switch(operator) {
            case '+': // '+'는 문자열끼리 더하면 문자열이 하나로 연결되기 때문에, 정수로 바꿔주고 시작
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case '-': // 나머지는 자동으로 정수로 바뀌고 시작됨
                $result.value = numOne - numTwo;
                break;
            case '*':
                $result.value = numOne * numTwo;
                break;
            case '/':
                $result.value = numOne / numTwo;
                break;
            default:
                break;
        }
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
});

// 계산기 초기화
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    $operator.value = '';
    $result.value = '';
});


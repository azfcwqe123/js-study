let numOne = ''; // 첫번째 피연산자
let operator = '';
let numTwo = ''; // 두번째 피연산자

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

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

const calculate = () => {
    if(numTwo) { // numTwo가 존재한다면
        switch(operator) { // 계산
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
        numOne = $result.value; // numOne에 numOne + numTwo 값을 저장. 이어지는 계산에 쓰여질 수도 있기 때문
        numTwo = ''; // numTwo 비운다.
        operator = ''; // 연산자 비운다.
        $operator.value = ''; // 화면에 보여지는 연산자도 비운다.
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
}

const onClickOperator = (op) => () => {
    if(numTwo) { // 두 개의 피연산자에 숫자가 존재한다면
        calculate(); // 계산
        operator = op; // 다음에 이어질 계산을 위해서
        $operator.value = op;
    } else if(numOne) {
        operator = op; // 다음에 이어질 계산을 위해서
        $operator.value = op;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }

}

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', calculate);

// 계산기 초기화
document.querySelector('#clear').addEventListener('click', () => {
        numOne = '';
        operator = '';
        numTwo = '';
        $operator.value = '';
        $result.value = '';
});


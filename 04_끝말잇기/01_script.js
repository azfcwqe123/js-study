const number = Number(prompt("참가자는 몇 명인가요?"));
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $order = document.querySelector('#order');
const $word = document.querySelector('#word');

let newWord; // 현재 단어
let word; // 제시어

const onInput = (event) => {
    newWord = event.target.value; // 입력한 단어를 현재 단어로 저장
};

const onClickButton = () => {
    const inputValue = $input.value.trim(); // 현재 입력값을 받는다. [예외처리를 위해 양쪽 공백 제거를 해준다.]

    if(!inputValue) { // 예외 처리. 입력칸이 전부 비어있을 경우
        alert("단어가 비어있습니다.");
        return;
    }

    if(inputValue.length != 3) { // 예외 처리. 세 글자가 아닌 경우
        alert("세 글자를 입력하세요.");
        return;
    }

    // 제시어가 비어있거나, 입력한 단어가 맞다면
    if(!word || word.at(-1) === newWord[0]) { 
        word = inputValue; // 방금 입력한 단어를 제시어로 설정
        $word.textContent = word;
        const order = Number($order.textContent); // 현재 참가자 번호를 불러옴

        if(order + 1 > number) {  // 다음 순서가 현재 인원수를 넘는다면
            $order.textContent = 1; // 첫번째 참가자로 복3귀
        } else { // 현재 인원수를 넘지 않는다면
            $order.textContent = order + 1; // 다음 순서로
        }

    } else { // 입력한 단어가 틀리다면
        alert('틀린 단어입니다!');
    }

    $input.value = ''; // 입력칸을 비우고
    $input.focus(); // 입력칸에 초점을 다시 맞춤
};

$input.addEventListener('input', onInput); // input 이벤트 연결
$button.addEventListener('click', onClickButton); // click 이벤트 연결
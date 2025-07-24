const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; // 랜덤 숫자를 만들기 위한 임시 배열
for(let n = 1; n <= 9; n++) { 
    numbers.push(n);
}

const answer = []; // 랜덤 숫자 배열
for(let i = 0; i <=3; i++) { // 4개의 랜덤 숫자 고르기
    const index = Math.floor(Math.random() * numbers.length); // numbers 길이에 따름. 그렇지 않으면 undefined 생길 가능성 매우 높음
    answer.push(numbers[index]); // 랜덤 숫자 배열에 삽입
    numbers.splice(index, 1); // numbers 배열에서 고른 숫자 제거
}

console.log(answer);

const tries = []; // 시도한 숫자들

function checkInput(input) { // 유효한 숫자인지?
    if(input.length !== 4) return alert('4자리 숫자를 입력하세요.');
    if(new Set(input).size !== 4) return alert('중복된 숫자를 입력했습니다.');
    if(tries.includes(input)) return alert('이미 시도한 값입니다.');
    return true;
}

function defeated() { // 패배시
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    $logs.appendChild(message);
}

let out = 0; // 아웃 횟수
 
$form.addEventListener('submit', (event) => {
    event.preventDefault(); // submit 이벤트 발생 시, 새로고침 방지
    const value = $input.value;
    $input.value = '';
    const valid = checkInput(value);

    if(!valid) return; // 유효하지 않은 숫자 
    
    if(answer.join('') === value) {
        $logs.textContent = '홈런!';
        return;
    }
    
    if(tries.length >= 9) { // 10의 기회를 다 날리면 패배
        defeated();
        return;
    }

    // 몇 스트라이크, 몇 볼인지 검사
    let strike = 0; 
    let ball = 0;

    answer.forEach((number, aIdx) => { 
        const index = value.indexOf(String(number)); // 입력한 숫자가 answer에 해당하는 번호가 있는지? 
        if(index > -1) { // 일치하는 숫자 발견
            if(index === aIdx) strike++; // 인덱스가 같다면 스트라이크
            else ball++; // 그렇지 않다면 볼
        }
    });

    if(strike === 0 && ball === 0) { // 스트라이크도, 볼도 없었다면 '아웃'
        out++;
        $logs.append(`${value}:아웃`, document.createElement('br'));
    } else {
        $logs.append(`${value}:${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    }

    // 아웃이 3번 누적되면 패배
    if(out === 3) {
        defeated();
        return;
    }

    // 시도했던 숫자들은 배열에 따로 저장.
    tries.push(value);
});
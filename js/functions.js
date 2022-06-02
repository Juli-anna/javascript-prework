function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

let computerMove = 'kamień';
let playerMove = 'papier';

printMessage('Zagrałem ' + computerMove +'! Jeśli Twój ruch to ' + playerMove + ' to wygrywasz!');

let randomFraction = Math.random();
printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;
printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Liczba po zaokrągleniu w dół to: ' + randomNumber);
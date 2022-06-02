function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

//let computerMove = 'kamień';
//let playerMove = 'papier';

//printMessage('Zagrałem ' + computerMove +'! Jeśli Twój ruch to ' + playerMove + ' to wygrywasz!');

let randomFraction = Math.random();
//printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;
//printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';
if(randomNumber ==1){
    computerMove = 'kamień';
}else if(randomNumber ==2){
    computerMove = 'papier';
}else if(randomNumber ==3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';
if(playerInput == '1'){
    playerMove = 'kamień';
}else if(playerInput == '2'){
    playerMove = 'papier';
}else if(playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove)

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam!');
}else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ja wygrywam!');
}else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!');
}else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');   
}else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Jest remis!');
}else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Jest remis!');
}else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Jest remis!');
}else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Nieznany ruch gracza!');
}else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Nieznany ruch gracza!');
}else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Nieznany ruch gracza!');
}

//printMessage('Liczba po zaokrągleniu w dół to: ' + randomNumber);

//if(1 > 2){
    //printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
//}else if(1==2){
    //printMessage('Dziwne - jeden jest równe dwa?!');
//}else{
    //printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
//}
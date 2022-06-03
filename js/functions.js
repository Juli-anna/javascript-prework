function playGame(playerInput){
    clearMessages()
    function printMessage(msg){
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    function clearMessages(){
        document.getElementById('messages').innerHTML = '';
    }

    function getMoveName(argMoveId){
        if(argMoveId ==1){
            return 'kamień';
        }if(argMoveId ==2){
            return 'papier';
        }if(argMoveId ==3){
            return 'nożyce';
        }else{
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove){
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            return 'Ty wygrywasz!';
        }else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            return 'Ty wygrywasz!'; 
        }else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            return 'Ty wygrywasz!';
        }else if( argComputerMove == argPlayerMove){
            return 'Jest remis!';
        }else if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
            return 'Nieznany ruch gracza!';
        }else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
            return 'Nieznany ruch gracza!';
        }else if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
            return 'Nieznany ruch gracza!';
        }else{
            return 'Ja wygrywam!';
    }
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

    let argComputerMove = getMoveName(randomNumber);
    /*if(randomNumber ==1){
        computerMove = 'kamień';
    }else if(randomNumber ==2){
        computerMove = 'papier';
    }else if(randomNumber ==3){
        computerMove = 'nożyce';
    }*/

    printMessage('Mój ruch to: ' + argComputerMove);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    //console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);
    /*if(playerInput == '1'){
        playerMove = 'kamień';
    }else if(playerInput == '2'){
        playerMove = 'papier';
    }else if(playerInput == '3'){
        playerMove = 'nożyce';
    }*/

    printMessage('Twój ruch to: ' + argPlayerMove)
    printMessage('Wynik: ' + displayResult(argComputerMove, argPlayerMove));

    /*if( computerMove == 'kamień' && playerMove == 'papier'){
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
    }*/

    //printMessage('Liczba po zaokrągleniu w dół to: ' + randomNumber);

    //if(1 > 2){
        //printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
    //}else if(1==2){
        //printMessage('Dziwne - jeden jest równe dwa?!');
    //}else{
        //printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
    //}
}
//playGame(3);
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
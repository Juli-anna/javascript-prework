{
const playGame = function(playerInput){
    const clearMessages = function(){
        document.getElementById('messages').innerHTML = '';
    }
    clearMessages()
    const printMessage = function(msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }
    const getMoveName = function(argMoveId){
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
    const displayResult = function(argComputerMove, argPlayerMove){
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
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);
    const argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove)
    printMessage('Wynik: ' + displayResult(argComputerMove, argPlayerMove));
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
}
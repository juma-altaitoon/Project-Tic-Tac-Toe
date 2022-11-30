// Array of Winnig Patterns
const winCondition = [["one","two","three"],["four","five","six"],["seven","eight","nine"],["one","four","seven"],["two","five","eight"],["three","six","nine"],["one","five","nine"],["three","five","seven"]];
// Number of turns- to trigger a draw if winCond is not executed
let numberOfturns = 0;
let playerSelect ={'player1': [],'player2': []};
let playerScore = { 'player1': 0, 'player': 0, 'draw': 0};
let playerIs = "player1";
let winningElement = [];
//Pause Audio
$('.music').click (function(){
    
})

//Click Sound Effect
$('.index').click( function(){
    let audioClick = new Audio();
    audioClick.src = "sounds/mixkit-game-user-interface-tone-2570.wav";
    audioClick.play();
});
//Hover Sound Effect
$('.index').mouseenter( function(){
    let audioHover = new Audio();
    audioHover.src = "sounds/mixkit-alien-technology-button-3118.wav";
    audioHover.play();
});

// Highlight onHover Boxes:
function toggleOnHover (){
    $(this).toggleClass("hoverOver");
    // console.log($(this).attr('id'));
}

$('.index').mouseenter( toggleOnHover);
$('.index').mouseleave( toggleOnHover);

//Player 1 Input
$('#player1').keypress(function(e){
    let playerText=$(this).val();
    if (e.which == 13){
        $('.one h3').text(playerText);
        $('#player1').prop('disabled',true);
        $('#player1').hide();
        $('.one h4').text(playerScore['player1']);
}})
//Player 2 Input
$('#player2').keypress(function(e){
    let playerText=$(this).val();
    if (e.which == 13){
        $('.two h3').text(playerText);
        $('#player2').prop('disabled',true);
        $('#player1').hide();
        $('.two h4').text(playerScore['player2']);
}})

$('.start').on('click', startGame);
$('.reset').on('click', resetGame);
// Function to start the game
function startGame() {
$('.index').click(function(){
    if (playerIs === "player1"){playerChar= 'X';}
else if(playerIs ==="player2"){ playerChar = 'O';}
    numberOfturns++
    $(this).text(playerChar);
    $(this).css({color: 'black', backgroundColor: 'white', border: 'solid black'});
    // console.log($(this).attr('id'));
    playerSelect[playerIs].push($(this).attr('id'));
    $(this).unbind('click');
    
    if (winCond()) {
        console.log("Check Execution "+ winCond());
        // console.log(`The Winner is ${playerIs}`);
        alert(`The Winner is ${playerIs}`);
        console.log("winnig combo "+winningElement);
        $(`#${winningElement[0]}`).css({backgroundColor: 'orange'});
        $(`#${winningElement[1]}`).css({backgroundColor: 'orange'});
        $(`#${winningElement[2]}`).css({backgroundColor: 'orange'});
        playerScore[playerIs]++;
        console.log(`${playerIs} score = ${playerScore[playerIs]}`);
        $('.index').unbind('click');
        updateScore();
        // $('.gameContainer').dblclick(startGame);
    }
    else if(drawCond()) {
        console.log(`It's a DRAW!`);
        alert(`It's a DRAW!`);
        playerScore['draw']++;
        $('.index').unbind('click');
        updateScore();
    }
    console.log(numberOfturns);
    console.log(playerIs);
    console.log(playerSelect[playerIs]);    
    switchPlayers();
});
}
// Switch Players
function switchPlayers() {
    if(playerIs === "player1"){
        playerIs = "player2";
        $('.two h3').toggleClass("currentPlayer");
        if ($('.one h3').hasClass("currentPlayer")){
            $('.one h3').toggleClass("currentPlayer");
        }
    }
    else if (playerIs === "player2"){
        playerIs = "player1";
        $('.one h3').toggleClass("currentPlayer");
        if ($('.two h3').hasClass("currentPlayer")){
            $('.two h3').toggleClass("currentPlayer");
        }}
}

//Check for win condition
function winCond(){
    if (numberOfturns >4 && numberOfturns<=9){
        for(x=0; x<winCondition.length; x++){
            let element = winCondition[x];
            let hasWinCond = true;
            for(i=0;i<element.length; i++){
                console.log(`$i=${i}--${playerSelect[playerIs]}--${playerIs}----- element(i)= ${element[i]}`);
                console.log(playerSelect[playerIs].includes(element[i])) ;
                if (playerSelect[playerIs].includes(element[i])){
                    hasWinCond = true;
                }
                else{
                    hasWinCond = false;
                    break;
                }
            }
            console.log("2ndLast Check -->"+hasWinCond);    
            if (hasWinCond){
                winningElement = element;
            console.log(winningElement);
                return true;
            }
        } 
       
    }
//         winCondition.forEach(element => {
//             for (i=0; i<element.length; i++) {
//                 //console.log(`$i=${i}--${playerSelect[playerIs]}--${playerIs}----- element(i)= ${element[i]}`);
//                 console.log(playerSelect[playerIs].includes(element[i])) ;
                
//                 if (playerSelect[playerIs].includes(element[i])){
//                     hasWinCond = true;
//                 }
//                 else{
//                     hasWinCond = false;
//                 }
//             } 
//             console.log("2ndLast Check -->"+hasWinCond);    
//             if (hasWinCond){
//                 return true;
//             }           
//         });
//         console.log("Last Check -->"+hasWinCond);
//     }
}
function updateScore (){
    if (drawCond()){
        $('.draw h4').text(playerScore['draw']);}
    if (playerIs === 'player1'){
        $('.one h4').text(playerScore['player1']);}
    if (playerIs === 'player2'){
        $('.two h4').text(playerScore['player2']);}
}
function drawCond (){
    // Draw
    if (numberOfturns === 9){
        return true;
    }
}

// Function to restart the game
function resetGame(){
    let numberOfturns = 0;
    let playerSelect ={'player1': [],'player2': []};
    $('.index').unbind('click');
    
    
}

// winCondition.forEach(element => {
//     element.forEach()
 
//console.log($('.x').attr('id'));
// Function to Update Player Name 
/*function assignPlayerName (){
    let playerText=$(this).val();
    if (this === '.one h4'){
 $('.one h4').text(playerText);
    }else if (this === '.two h4'){
    }
}*/

// Function to Create 'X' component
// function createX() {
//     $(this).text("");
//     console.log("box number "+$(this).attr('id'));
//     $(this).append("<h1 class='x'>X</h1>");
//     $(this).prop('disabled',true);
//     let check = $(this).attr('id');
//     console.log("check "+check);
//     player1Select.push($(this).attr('id'));
//     console.log(player1Select);    
   
// // Function to Create 'O' component
// function createO() {
//     $(this).text("");
//     console.log("box number "+$(this).attr('id'));
//     $(this).append("<h1 class='o'>O</h1>");
//     $(this).prop('disabled',true);
//     let check = $(this).attr('id');
//     console.log("check "+check);
//     player2Select.push($(this).attr('id'));
//     console.log(player2Select);
// }


// Check Win 
// function gameWinCheck(){
//     let checkX = document.getElementsByClassName("x");
//     let checkO = document.getElementsByClassName("o");
//     winCondition.forEach(element => { 
//         if (element === checkX) {
//             console.log("X wins!!");
//         }
//         if (element === checkO) {
//             console.log("O wins!!");
//         }    
//     });
// }   

// __________Main Logic ____________

//Store PlayerSelection
// function storeSelect(){
//     let playerIs = "player1";    
//     let player1Select =[];
//     let player2Select =[];   
//         if (playerIs === "player1"){
//             //$('.index').click(createX);
//             // execute createX();
//             player1Select.push($(this).attr('id'));
//             console.log("P1 = "+player1Select);
//             switchPlayers();
//         }
//         else if (playerIs === "player2"){
//              //execute createO;
//             player2Select.push($(this).attr('id'));
//             console.log("p2 = "+player2Select);
//             switchPlayers();
//         }
//     }
     
 // $('.index').click(storeSelect)
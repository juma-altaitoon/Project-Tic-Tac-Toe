// Array of Winnig Patterns
const winCondition = [["one","two","three"],["four","five","six"],["seven","eight","nine"],["one","four","seven"],["two","five","eight"],["three","six","nine"],["one","five","nine"],["three","five","seven"]];
let numberOfturns = 0;
let playerSelect ={
    'player1': [],
    'player2': []
};
let playerIs = "player1";

$('.index').click(function(){
    if (playerIs === "player1"){playerChar= 'X';}
else if(playerIs ==="player2"){ playerChar = 'O';}
    $(this).text(playerChar);
    playerSelect[playerIs].push($(this).attr('id'));
    numberOfturns++
    if (winCond()) {
        alert("The Winner is");
    }
    if(drawCond()) {
        alert(`It's a DRAW!`)
    }
    console.log(numberOfturns);

    switchPlayers();
    console.log(playerIs);
    console.log(playerSelect);
});

//Player 1 Input
$('#player1').keypress(function(e){
    let playerText=$(this).val();
    if (e.which == 13){
        $('.one h3').text(playerText);
        $('#player1').prop('disabled',true);
}})
//Player 2 Input
$('#player2').keypress(function(e){
    let playerText=$(this).val();
    if (e.which == 13){
        $('.two h3').text(playerText);
        $('#player2').prop('disabled',true);
}})
// Highlight onHover Boxes:
function toggleOnHover (){
    $(this).toggleClass("hoverOver");
    // console.log($(this).attr('id'));
}

$('.index').mouseenter( toggleOnHover);
$('.index').mouseleave( toggleOnHover);


// Switch Players
function switchPlayers() {
    if(playerIs === "player1"){
        playerIs = "player2";
    }
    else if (playerIs === "player2"){
        playerIs = "player1";
    }
}

//Check for win condition
function winCond(){
   if (numberOfturns >4 && numberOfturns<=9){ 
    winCondition.forEach(element => {
    let hasWinCond = true;    
    for (i=0; i<element.length; i++) {
        if (playerSelect[playerIs].includes(element[i])<0){
            hasWinCond = false;
            return hasWinCond;
            break;
        }
        else{return;}
    }
    // hasWinCond = element.every(box => {
    //     //console.log(playerSelect[playerIs].indexOf(box)); 
    //     return playerSelect[playerIs].includes(box) ==-1;
    // }) ;
    console.log(hasWinCond);
    if (hasWinCond){
        return true;
    }
    });
    }
    
}   
function drawCond (){
    // Draw
    if (numberOfturns >9){
        return true;
    }
    else {
        return;
    }
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
     
 // $('.index').click(storeSelect);
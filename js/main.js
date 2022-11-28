// Array of Winnig Patterns
const winCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

winCondition.forEach(element => {
    element = element.join("")
    console.log(element)
})
// Function to Update Player Name 
/*function assignPlayerName (){
    let playerText=$(this).val();
    if (this === '.one h4'){
 $('.one h4').text(playerText);
    }else if (this === '.two h4'){
    }
}*/
$('#player1').keypress(function(e){
    let playerText=$(this).val();
    if (e.which == 13){
        $('.one h4').text(playerText);
        $('#player2').prop('disabled',true);
}})
$('#player2').keypress(function(e){
    let playerText=$(this).val();
    if (e.which == 13){
        $('.two h4').text(playerText);
        $('#player2').prop('disabled',true);
}})

function toggleOnHover (){
    $(this).toggleClass("hoverOver");
    console.log($(this).attr('id'));
}

$('.index').mouseenter( toggleOnHover);
$('.index').mouseleave( toggleOnHover);
// Function to Create 'X' component
function createX() {
    $(this).text("");
    $(this).append("<h1 class='x'>X</h1>");
    $(this).prop('disabled',true);
}
// Function to Create 'O' component
function createO() {
    $(this).text("");
    $(this).append("<h1 class='o'>O</h1>");
}
$('.index').dblclick(createO);
$('.index').click(createX);

// Check After Player's 3rd click 
function gameWinCheck(){
    let checkX = document.getElementsByClassName("x");
    let checkO = document.getElementsByClassName("o");
    winCondition.forEach(element => {
        if (element === checkX) {
            console.log("X wins!!");
        }
        if (element === checkO) {
            console.log("O wins!!");
        }
              
    });
}   
// Check Overall Winner:


        
 
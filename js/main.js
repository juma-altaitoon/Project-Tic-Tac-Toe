// Array of Winnig Patterns
const winCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
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
}
// Function to Create 'O' component
function createO() {
    $(this).text("");
    $(this).append("<h1 class='o'>X</h1>");
}


$('.index').click(createX);
        
 


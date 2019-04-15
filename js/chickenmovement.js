
function move()
{
    //to set chicken left
    var beginleft=$('#chicken_div').css("left");
    $('.chicken').css("left",beginleft);
    //to move the chicken left and rigth
    $(".chicken").animate({left:"+=200px"},7000).animate({left:"-=200px"},7000);
       
} //chicken movement
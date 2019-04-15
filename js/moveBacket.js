var pageWidth=parseInt($(window).width())-30;
var backetWidth=parseInt($("#collector").css("width"));
var mousem=pageWidth-backetWidth;
var eventmouse;
var eventkey;
movebacket=function(){
    eventmouse=$(document).on("mousemove",function(event){
        if(event.pageX<=mousem)
        {
            $("#collector").css("left",event.pageX+"px"); 
        }
    });//move backet using mouse

    eventkey=$(window).on("keyup",function(event){
        if(event.keyCode=='39')
        {
            pos=parseInt($("#collector").css("left"));
            if(pos<=mousem){
                pos+=25;
                $("#collector").css("left",pos+"px");
            }
        }
    });//move backet right using keyboard
    eventkey= $(window).on("keyup",function(event){
        if(event.keyCode=='37')
        {
            pos=parseInt($("#collector").css("left"));
            if(pos>0){
                pos-=25;
                $("#collector").css("left",pos+"px");
            }
        }
    });//move backet left using keyboard
}
$(function(){ 
   movebacket();
});//load
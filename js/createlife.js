var lifeImg;
var leftPacket;
var leftlife;
var topPacket;
var toplife;
var lifeanime;
var chickenPosition;
var lifePosition;
var mainDiv;


function lifefunction(position=200,time=5000)
{
    //create lifess
    lifeImg=document.createElement("img");
    //set life style
    $(lifeImg).attr('src','images/lifes.png')
    .addClass('FallingEgg')
    .css({left:position,top:200});
    //append life to the page
    mainDiv=$("#maindiv");
    mainDiv.append(lifeImg);
    //life falling
    $(lifeImg).animate(
        {top:mainDiv.innerHeight()-130}
        ,time
        ,function(){

            leftlife=parseInt($(this).css("left"));
            leftPacket=parseInt($("#collector").css("left"));
            toplife=parseInt($(this).css("top"));
            topPacket=parseInt($("#collector").css("top"));
            //if life match the basket
            if(leftlife>leftPacket+10
            &&
            leftlife<leftPacket+140
            &&
            toplife+100>=topPacket)
            {
                //life calculate
                $(this).hide();
                if(life>0){
                    $('.lifes').text(++life);
                } 
            }
            else
            {
                this.remove();
            }
             return this;
            }); //create life && falling 
        }
            animelife=function(){
                lifeanime=setInterval(function(){
                    chickenPosition=parseInt($($(".chicken")[indexChicken]).css("left"))+40;
                    lifePosition=chickenPosition; 
                    indexChicken++;
                    if(indexChicken==3)
                    indexChicken=0
                    lifefunction(lifePosition,700) //life create and fall caller
                    if(life<=0){
                        //stop life falling
                        clearInterval(lifeanime);
                    } //if life=0
                },7000);
        }
        $(function(){
            $("#backbtn").addEventListener("click",function(){
                if($("#backbtn").val()=="Start"){
                    $("#backbtn").val("Go back");
                    animelife();
                }
                else{
                    $("a").attr("href","main.html")
                }
            })
            
        })
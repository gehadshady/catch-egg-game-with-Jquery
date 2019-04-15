var rockImg;
var rockPosition;
var rockanime;
var mainDiv;
var leftPacket;
var leftrock;
var topPacket;
var toprock;
var chickenPosition;


function rock(position,time)
{
    //create rocks
    rockImg=document.createElement("img");
    //set rock style
    $(rockImg).attr('src','images/rock.png')
    .addClass('FallingEgg')
    .css({left:position,top:200});
    //append rock to page
    mainDiv=$("#maindiv");
    mainDiv.append(rockImg);
    //rock falling
    $(rockImg).animate(
        {top:mainDiv.innerHeight()-130}
        ,time
        ,function(){
            
            leftrock=parseInt($(this).css("left"));
            leftPacket=parseInt($("#collector").css("left"));
            toprock=parseInt($(this).css("top"));
            topPacket=parseInt($("#collector").css("top"));
            //if rock match the basket
            if(leftrock>leftPacket+10
            &&
            leftrock<leftPacket+140
            &&
            toprock+100>=topPacket){
                //score calculate
                $(this).hide();
                score=0;
                if(life>0)
                    $(".score span").text(score);
            }
            else
            {
                
                this.remove();
            }
            return this;
        }); //create rock && falling
    }
        animerock=function(){
            rockanime=setInterval(function(){
                chickenPosition=parseInt($($(".chicken")[indexChicken]).css("left"))+40;
                rockPosition=chickenPosition;
                indexChicken++;
                if(indexChicken==3)
                    indexChicken=0
                rock(rockPosition,700) //rock create and fall caller
                if(life<=0){
                    //stop rock falling
                    clearInterval(rockanime);
                } //if life=0
            },5000);
        }
    $(function(){
        $("#backbtn").addEventListener("click",function(){
            if($("#backbtn").val()=="Start"){
                $("#backbtn").val("Go back");
                animerock();
            }
            else{
                $("a").attr("href","main.html")
            }
        })
    })
var score=0;
var life=5
var eggImg;
var indexChicken=0;
var leftEgg;
var brokenegg;
var anime1;
var egganime;
var chickenPosition;
var eggPosition;
//score function
$.fn.extend({
    score:function(){
        $(".score span").text(++score);
    }
});

function movePausedEggs()
{
    $(".FallingEgg").animate(

        {top:mainDiv.innerHeight()-130}
        ,{duration:1500, complete:function(){
            //play broken egg sound
            document.getElementById("break").play();
            leftEgg=$(this).css("left");
            this.remove();
            //life calculate
            if (life > 0){
                $(".lifes").text(--life);
                //create broken egg
                brokenegg = document.createElement("img");
                //set broken egg style
                $(brokenegg).attr('src', 'images/brokenEgg.png')
                .addClass('brokenEgg');
                //append broken egg to page
                mainDiv.append(brokenegg);
                //remove broken egg
                $(brokenegg).css({ width: "100px", height: "100px", left: leftEgg, bottom: "-10px" }).hide(3000, function () {
                this.remove();
            });
        }
    },step:function(now){
        //if egg match the basket
        if((parseInt($(this).css("left"))>parseInt($("#collector").css("left"))+10)
        &&
        parseInt($(this).css("left"))+50<parseInt($("#collector").css("left"))+200
        &&
        now>=parseInt($("#collector").css("top"))+40
        &&
        now<parseInt($("#collector").css("top"))+190){
            //play catch sound
            document.getElementById("basket").play();
            //hide egg
            $(this).hide(100,function(){
                //score calculate
                if(life>0){
                    $(this).score();
                }
            }).stop().remove();
        }
    }});
}

function egg(position=200,time=5000)
{
    //create eggs
    eggImg=document.createElement("img");
    //set egg style
    $(eggImg).attr('src','images/2.png')
    .addClass('FallingEgg')
    .css({left:position,top:200});
    //append egg to page
    mainDiv=$("#maindiv");
    mainDiv.append(eggImg);
    //play chicken sound
    document.getElementById("back").play();
    //egg falling
    $(eggImg).animate(

        {top:mainDiv.innerHeight()-130}
        ,{duration:time, complete:function(){
            //play broken egg sound
            document.getElementById("break").play();
            leftEgg=$(this).css("left");
            this.remove();
            //life calculate
            if (life > 0){
                $(".lifes").text(--life);
                //create broken egg
                brokenegg = document.createElement("img");
                //set broken egg style
                $(brokenegg).attr('src', 'images/brokenEgg.png')
                .addClass('brokenEgg');
                //append broken egg to page
                mainDiv.append(brokenegg);
                //remove broken egg
                $(brokenegg).css({ width: "100px", height: "100px", left: leftEgg, bottom: "-10px" }).hide(3000, function () {
                this.remove();
            });
        }
    },step:function(now){
        //if egg match the basket
        if((parseInt($(this).css("left"))>parseInt($("#collector").css("left"))+10)
        &&
        parseInt($(this).css("left"))+50<parseInt($("#collector").css("left"))+200
        &&
        now>=parseInt($("#collector").css("top"))+40
        &&
        now<parseInt($("#collector").css("top"))+190){
            //play catch sound
            document.getElementById("basket").play();
            //hide egg
            $(this).hide(100,function(){
                //score calculate
                if(life>0){
                    $(this).score();
                }
            }).stop().remove();
        }
    }});
    return this;//create egg && falling 
}

anime1=function(){
    //loop egg animation
    egganime=setInterval(function(){
        chickenPosition=parseInt($($(".chicken")[indexChicken]).css("left"))+40;
        //set egg position
        eggPosition=chickenPosition;
        indexChicken++;
        if(indexChicken==3)
        indexChicken=0
        egg(eggPosition,2000) //egg create and fall caller

        if(life<=0)
        {
            confirm();

             //save score in local storage
             if(localStorage.getItem("highScore")<score){
                localStorage.setItem("highScore",score);
                localStorage.setItem("highuser",localStorage.getItem("currentuser"));
             }
                             
            //play lose sound
            document.getElementById("lose").play();
            //stop egg falling
            clearInterval(egganime);
            clearInterval(stopTimer);
            life=0;
        } //if life=0
        move();//chicken move caller
    },1000);
}

$(function(){
    $("#backbtn").on("click",function(){
        if($("#backbtn").val()=="Start"){
            $("#backbtn").val("Go back");
            theTimer();
            anime1();

        }
        else{
            $("a").attr("href","main.html")
        }
    })
    $(".name").text(localStorage.getItem("currentuser"));
});//load

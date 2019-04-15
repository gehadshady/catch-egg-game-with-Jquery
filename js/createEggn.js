var score = 0;
var life = 5;
var counter;
var egganime;
var indexChicken = 0;
var eggImg;
var mainDiv;
var leftEgg;
var leftPacket;
var topEgg;
var topPacket;
var breakegg;
var chickenPosition;
var eggPosition;

function movePausedEggs(){
    $(".FallingEgg").animate(
        { top: mainDiv.innerHeight() - 130 }
        , 1500
        , function () {

            leftEgg = parseInt($(this).css("left"));
            leftPacket = parseInt($("#collector").css("left"));
            topEgg = parseInt($(this).css("top"));
            topPacket = parseInt($("#collector").css("top"));
            //if egg match the basket
            if (leftEgg > leftPacket + 10
                &&
                leftEgg < leftPacket + 140
                &&
                topEgg + 100 > topPacket) {
                    //play catch sound
                    document.getElementById("basket").play();
                    //hide egg
                    $(this).hide();
                    //score calculate
                    if (life > 0) {

                        if ($(this).attr('src') == 'images/1.png') {
                            score -= 3;
                        }
                        else if ($(this).attr('src') == 'images/3.png')
                            score += 3;
                        else {
                            score++;
                        }
                        $(".score span").text(score);
                    }
                }
            // if egg broken
             else {
                 //play breakegg sound
                 document.getElementById("break").play();
                 this.remove();
                 if (life > 0) {
                     //life calculate
                     if($(this).attr('src') != 'images/1.png'){ 
                        $(".lifes").text(--life);
                        }
                        //create broken egg
                        brokenegg = document.createElement("img");
                        $(brokenegg).attr('src', 'images/brokenEgg.png')
                        .addClass('brokenEgg');
                        mainDiv.append(brokenegg);
                        //hide broken egg
                        $(brokenegg).css({ width: "100px", height: "100px", left: leftEgg, bottom: "-10px" }).hide(3000, function () {
                            this.remove();
                        });
                    }
                }
            }); //create egg && falling 
}

function egg(position = 200, time = 5000) {
    //create eggs
    eggImg = document.createElement("img");
    //choose random img
    counter = Math.ceil(Math.random() * 5);
    //set egg style
    $(eggImg).attr('src', 'images/' + counter + '.png')
    .addClass('FallingEgg')
    .css({ left: position, top: 200 });
    //append egg to the page
    mainDiv = $("#maindiv");
    mainDiv.append(eggImg);
    //play chicken sound
    document.getElementById("back").play();
    //egg falling
    $(eggImg).animate(
        { top: mainDiv.innerHeight() - 130 }
        , time
        , function () {

            leftEgg = parseInt($(this).css("left"));
            leftPacket = parseInt($("#collector").css("left"));
            topEgg = parseInt($(this).css("top"));
            topPacket = parseInt($("#collector").css("top"));
            //if egg match the basket
            if (leftEgg > leftPacket + 10
                &&
                leftEgg < leftPacket + 140
                &&
                topEgg + 100 > topPacket) {
                    //play catch sound
                    document.getElementById("basket").play();
                    //hide egg
                    $(this).hide();
                    //score calculate
                    if (life > 0) {

                        if ($(this).attr('src') == 'images/1.png') {
                            score -= 3;
                        }
                        else if ($(this).attr('src') == 'images/3.png')
                            score += 3;
                        else {
                            score++;
                        }
                        $(".score span").text(score);
                    }
                }
            // if egg broken
             else {
                 //play breakegg sound
                 document.getElementById("break").play();
                 this.remove();
                 if (life > 0) {
                     //life calculate
                     if($(this).attr('src') != 'images/1.png'){ 
                        $(".lifes").text(--life);
                        }
                        //create broken egg
                        brokenegg = document.createElement("img");
                        $(brokenegg).attr('src', 'images/brokenEgg.png')
                        .addClass('brokenEgg');
                        mainDiv.append(brokenegg);
                        //hide broken egg
                        $(brokenegg).css({ width: "100px", height: "100px", left: leftEgg, bottom: "-10px" }).hide(3000, function () {
                            this.remove();
                        });
                    }
                }
                return this;
            }); //create egg && falling 
        }
        function anime1(){
            //loop egg animation
            egganime= setInterval(function () {
                chickenPosition = parseInt($($(".chicken")[indexChicken]).css("left")) + 40;
                //set egg position
                eggPosition = chickenPosition;
                indexChicken++;
                if (indexChicken == 3)
                    indexChicken = 0
                egg(eggPosition, 1500); //egg create and fall caller
                if (life <= 0) {
                    //stop egg falling
                     clearInterval(egganime);
                     //play lose sound
                     document.getElementById("lose").play();
                     // alert("Game Over");
                     confirm();
                     
                     //save score in local storage
                     if(localStorage.getItem("highScore")<score){
                        localStorage.setItem("highScore",score);
                        localStorage.setItem("highuser",localStorage.getItem("currentuser"));
                     }
                        

                     //stop timer
                     clearInterval(stopTimer);
                    } //if life=0
                    move(); //chicken movement
                }, 1000);
            }
            $(function () {
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

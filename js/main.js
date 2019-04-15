
$(document).ready(function () {

    //start intro music
    document.getElementById("music").play();

    //check if player data is saved in localStorage
    if((localStorage.getItem("highuser")!=null)&&(localStorage.getItem("highScore")!=null))
        dialog.alert({
            title: "general player with high score is "+localStorage.getItem("highuser")+" and   general high score is "+localStorage.getItem("highScore"),
        });

    //auto foucs in name textbox    
    $("input[type=text]").focus();


    //choose mood and redirect to its page
    $(".startBtn").click(function(e){
        radioValue = $("input[name='mood']:checked").val();

        if(radioValue=="easy" && $("input[type=text]").val()!="")
        {
            localStorage.setItem("currentuser",$("input[type=text]").val());
            //console.log(name);
            window.location.href = "easy.html"; 

        }
        else if(radioValue=="normal" && $("input[type=text]").val()!="")
        {
            localStorage.setItem("currentuser",$("input[type=text]").val());
            window.location.href ="normalMood.html";
        }
        else if(radioValue=="hard" && $("input[type=text]").val()!="")
        {
            localStorage.setItem("currentuser",$("input[type=text]").val());
            window.location.href = "hard.html"; 
        }
        else if($("input[type=text]").val()=="")
        {
            //alert("plz choose your name")
            dialog.alert({
                title: "plz choose your name",
              });
        }
        else {
           // alert("plz choose mood")
           dialog.alert({
                title: "plz choose your mood",
              });
        }
    })
    

    //rulse btn
    $(".rulesBtn").click(function(){
        dialog.alert({
            title: "The Game Rules",
            message: "Try to catch eggs by moving basket with mouse or arrows. Easy Mood:whiteEgg = 1point, Normal Mode: whiteEgg = 1point , goldenEgg = 3points blacEgg = -3points "+
            "Hard Mood : The rock break  all eggs , heart give you extra life"
          });
    })
    
});//ready
$(function () {
     $("#pauseResume").on("click",function(){
          if($("#pauseResume").val()=="Resume"){
               $("#pauseResume").val("Pause");
               theTimer();
               anime1();
               move();
               movebacket();
               movePausedEggs();
          }
          else{
               $("#pauseResume").val("Resume");
               clearInterval(stopTimer);
               $(".FallingEgg").stop();
               $(".chicken").stop(true);
               clearInterval(egganime);
               eventkey.off();
               eventmouse.off();
          }
     });
});//load

    function confirm(){
    dialog.confirm({
        title: "Your score is "+score,
        message: "play again ?",
        cancel: "no",
        button: "yes",
        required: true,
        callback: function(value){
          if(!value){
            window.location.href = "main.html"; 
          }
          if(value){
            window.location.href = "normalMood.html"; 

          }
        }
      });
}
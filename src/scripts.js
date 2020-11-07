var date = new Date;
var hours = date.getHours();
var topimg = $(".Top-cloud");
var btmimg = $(".Bottom-cloud");



function changecloud(time){
  if (time >=6 && time <=19){
  topimg.attr("src","src/image/daylight.png")
  btmimg.attr("src","src/image/daylight.png")
} else{
  btmimg.attr("src","src/image/night.png")
  topimg.attr("src","src/image/night2.png")
}
}



var time, h, m, s, greeting;

window.onload = function() { setInterval( timeNow, 100); }

function timeNow() {

  time = new Date();

  h = time.getHours();
  m = time.getMinutes();
  s = time.getSeconds();
  if ( s < 10 ) { s = "0" + s; } /* we add a 0 in front of s, when it is lower than 10, because that's what most clocks display, this is for the human user rather than for any need by the computer */
  document.querySelector(".time").innerHTML = h + ':' + m + ':' + s;
  document.querySelector(".time2").innerHTML = h + ':' + m + ':' + s;


  if (h>=0 && h<12){
    greeting="Good Morning"
  }else if(h>=12 && h<18){
    greeting="Good Afternoon"
  }else{
    greeting="Good Evening"
  }
  document.querySelector(".greeting").innerHTML = greeting;
  document.querySelector(".greeting2").innerHTML = greeting;

}

const mykelBot = () => {
  var $id = 0;

  $(".js-beacon").click(function(e) {
    e.preventDefault();
    // Beacon("open");
    $(".js-beacon").blur();
    $("#c-mykelbot").addClass("hide");
  });

  $(".js-mykelbot").click(function(e) {
    e.preventDefault();
    // Beacon("close");
    $(".js-mykelbot").blur();
    $("#c-mykelbot").removeClass("hide");
    $(".c-fab").addClass("hide");

    $("#c-new-content").empty();
    $(".c-mykelbot_content .c-mykelbot_options").removeClass("hide").addClass("active");
  });

  $(".js-mykelbot-exit").click(function(e) {
    e.preventDefault();
    // Beacon("close");
    $(".js-mykelbot-exit").blur();
    $("#c-mykelbot").addClass("hide");
    $(".c-fab").removeClass("hide");

    setTimeout(function () {
      $("#c-new-content").empty();
      $(".c-mykelbot_content .c-mykelbot_options").removeClass("hide").addClass("active");
    }, 100 );

  });


  $(".c-mykelbot_button").click(function(e) {
    var $this = $(this);
    e.preventDefault();

    // var $delimiter = "_";
    // var $num = $this.attr("id").split($delimiter)[1];
    var $data = $this.data("question");
    var $answer = "#c-mykelbot-q .c-mykelbot_answer--" + $data;
    var $updated = "c-mykelbot_answer--" + $id;
    var $location = "#c-new-content";
    var $buttons = ".c-mykelbot_options";

    $this.closest($buttons).removeClass("active").addClass("hide");
    $($answer).clone(true,true).addClass("active").attr('id', $updated).appendTo($location);

    var $animationId = "#" + $updated + " > div";
    
    $($animationId).each(function(index){
        var $this = $(this);
        setTimeout(function () {
          $this.addClass("active");

          var msgDiv = $("#c-mykelbot-content");
          // msgDiv.scrollTop = msgDiv.scrollHeight;

          setTimeout(function () {
            $(msgDiv).scrollTop($(msgDiv)[0].scrollHeight);
          }, 10 );

        }, index*1500);
      });

    $id++;
    // console.log($id);

  });
}


// 


$(document).ready(() => {
    mykelBot();
    changecloud(hours);
});

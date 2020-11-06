

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
});

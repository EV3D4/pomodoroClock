$(document).ready(function() {
  var countdown = 3;
  var firstPress = 0;
  var breakSession = 0;
  var defaultBreak = 6;
  var defaultSession = 25;
  var myVar;


  $(".startButton").on("click", function() {
    if (firstPress == 0) {
      myfunction();
      countdown = defaultSession;
      firstPress = 1;
      document.getElementById("timer").innerHTML = countdown;
    } else {
      $(".startButton").css("background", "#00aaff");
      firstPress = 0;
      clearTimeout(myVar);
      document.getElementById("timer").innerHTML = "start";
    }


  });


  function myfunction() {

    myVar = setInterval(myTimer, 60000);

    function myTimer() {
      countdown = countdown - 1;
      if (countdown == 0) {
        if (breakSession == 0) {
          countdown = defaultBreak;
          $(".startButton").css("background", "#f44336");
          breakSession = 1;
        } else {
          countdown = defaultSession;
          $(".startButton").css("background", "#00aaff");
          breakSession = 0;
        }

      }
      document.getElementById("timer").innerHTML = countdown;

      ;
    }

  }

  $("#plusSession").on("click", function() {

    defaultSession = defaultSession + 1;

    if (defaultSession < 10)
      $(".buttonValueSession").text("0" + defaultSession + " min");
    else if (defaultSession >= 10)
      $(".buttonValueSession").text(defaultSession + " min");

  });


  $("#minusSession").on("click", function() {
    if (defaultSession >= 1)
      defaultSession = defaultSession - 1;

    if (defaultSession < 10)
      $(".buttonValueSession").text("0" + defaultSession + " min");
    else if (defaultSession >= 10)
      $(".buttonValueSession").text(defaultSession + " min");
  });



  $("#plusBreak").on("click", function() {

    defaultBreak = defaultBreak + 1;

    if (defaultBreak < 10)
      $(".buttonValueBreak").text("0" + defaultBreak + " min");
    else if (defaultBreak >= 10)
      $(".buttonValueBreak").text(defaultBreak + " min");

  });


  $("#minusBreak").on("click", function() {

    if (defaultBreak >= 1)
      defaultBreak = defaultBreak - 1;


    if (defaultBreak < 10)
      $(".buttonValueBreak").text("0" + defaultBreak + " min");
    else if (defaultBreak >= 10)
      $(".buttonValueBreak").text(defaultBreak + " min");

  });

});

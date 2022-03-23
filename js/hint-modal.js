$(document).ready(function () {
  $('#nextBtn').click(function (e) {
    e.preventDefault();
    checkAnswer();
  });




  $('#hintCloseBtn').click(function () {
    $('#myHintModal').css({
      display: "none"
    });
  });

  // stage 4
  $('#ticketNextBtn').click(function () {
    $.getJSON("./answers.json", function (data) {
      var page_index = $("#codeInput").attr("index");
      $('#myTicketModal').css({
        display: "none"
      });
      window.location.href = "./" + data.answers[page_index].page;

    });
  });

  // stage 6
  $('#hintNextBtn').click(function () {
    // console.log('1');
    $.getJSON("./answers.json", function (data) {
      var page_index = $("#codeInput").attr("index");
      $('#myDangerModal').css({
        display: "none"
        
      });

      $('#dotDisplay').css({
        display: "flex"
      });

      setTimeout(function () {
        window.location.href = "./" + data.answers[page_index].page;
        // console.log('2');
      }, 4000);
    });
  });
});

function checkAnswer() {
  var page_index = $("#codeInput").attr("index");
  $.getJSON("./answers.json", function (data) {

    if ($('#codeInput').val() == data.answers[page_index].answer) {
      console.log('correct');
      //stage1
      if (page_index == 0) {
        $('#myLoadingModal').css({
          display: "block"
        });
        setTimeout(function () {
          window.location.href = "./" + data.answers[page_index].page;
        }, 1000);
      }
      //stage4
      else if (page_index == 3) {
        setTimeout(function () {
          $('#myTicketModal').css({
            display: "block"
          });
        }, 300);
      }
      // stage 6
      else if (page_index == 5) {
        setTimeout(function () {
          $('#myDangerModal').css({
            display: "block"
          });
        }, 300);
      } else {
        //button animation runs for 0.3s
        setTimeout(function () {
          window.location.href = "./" + data.answers[page_index].page;
        }, 300);

      }
    } else {
      setTimeout(function () {
        $('#myHintModal').css({
          display: "block"
        });
      }, 300);
    }
  });
}
$(document).ready(function () {


var txtErr = "<p style='color:orangered; font-size: 1em; margin-bottom: -2em;'>코드를 잘못 입력 되었습니다. <br> 다시 확인하고 입력해 주세요.</p>";

$('#info-Btn').click(function(){
    $('#myModal').css({display: "block"});
    console.log("hello");
  });


  $('#close-Btn').click(function(){
    $('#myModal').css({display: "none"});
  });

  $('#codeBtn').click(function(e){
    e.preventDefault();
    var code = $('#codeInput').val();

    if (code == '181818') {
      console.log('correct');
      window.location.href = "./start.html";
    }
    else {
      // alert('Wrong password, Correct password is 181818.');
      $('#codeError').html(txtErr);
      setTimeout(function(){$('#codeError').html("")},3000);
      $("#codeInput").val("")
    }
    console.log('done');
  });

  $('#startBtn').click(function(e){
    e.preventDefault();
    window.location.href = "./stage1-1.html";
  });


});

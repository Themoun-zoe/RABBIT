$(function() {
    // $('#infoModal').load('./common/info.html');
    $(document).on('click', '#info-Btn', function(e) {
      e.preventDefault();
      $('#myModal').css({display: "block"});
    });
    $(document).on('click', '#close-Btn', function(e) {
      e.preventDefault();
      $('#myModal').css({display: "none"});
    });
  });
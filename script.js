$("#container").mouseenter(function(e) {

    $(this).animate({
      scrollTop: $(
        'html, body').get(0).scrollHeight
    }, 2000);
  
  });
  
  $("#container").mouseleave(function(e) {
  
    $(this).animate({
      scrollTop: 0
    }, 2000);
  
  });
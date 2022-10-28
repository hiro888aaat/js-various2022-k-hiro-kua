$(function(){
  
  $(".item").on("inview",function(){
    $(this).addClass("in");
  })

  $("#person").on("inview",function(){
    $(this).addClass("in");
  })


  $("a[href^='#']").click(function(){
    var target = $(this.hash);
    var position = $(target).offset().top;
    $('html,body').animate({scrollTop: position}, 4000);
    return false;
  });


})
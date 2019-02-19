

$(document).ready(function(){
  $(".texto_grande").mouseover(function(){
    $(this).animate({fontSize: "2em"});
  });
  $(".texto_grande").mouseout(function(){
    $(this).animate({fontSize: "1.5em"});
  });
});
$(document).ready(function(){
  $(".icon").mouseover(function(){
    $(this).animate({fontSize: "2em"});
  });
  $(".icon").mouseout(function(){
    $(this).animate({fontSize: "1.5em"});
  });
});
$(document).ready(function(){
  $("#read_more").click(function(){
    $(".paragraf-1").slideToggle();
  });
});
$(document).ready(function(){
  $("#read_more2").click(function(){
    $(".paragraf-2").slideToggle();
  });
});
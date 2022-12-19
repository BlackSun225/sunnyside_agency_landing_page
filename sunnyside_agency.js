$(document).ready(function(){
  $('.social a').on({
    mouseover: function(){
      $(this).children('img').css('display','none');
      $(this).children('i').css('display','block');
    },
    mouseout: function(){
      $(this).children('img').css('display','block');
      $(this).children('i').css('display','none');
    }
  });
  $("#mob").click(function(){
    $('.menu').toggle();
  });
});
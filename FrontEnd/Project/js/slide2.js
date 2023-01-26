var idx_lgth = $("#visual>div").length;
  var srt = 1;
  var idx = 0;
  $("section>a").click(function(){
   
    idx = $(this).index();
    srt = idx;
    $(this).addClass('on').siblings().removeClass('on');
    $("#visual>div").eq(idx).addClass('on').siblings().removeClass('on');
  });
  
var AutoSlide = setInterval(AutoRun, 4000);

function AutoRun(){
  srt++;  
  
  if(srt == idx_lgth){
      srt = 0;  
  }
$("section>a").eq(srt).addClass('on').siblings().removeClass('on');
  $("#visual>div").eq(srt).addClass('on').siblings().removeClass('on');
}

$("#visual").mouseover(function(){
  clearInterval(AutoSlide);
  $("#right").css({opacity : '100'});
  $("#left").css({opacity : '100'});
});
$("#visual").mouseleave(function(){
   AutoSlide = setInterval(AutoRun, 4000);
    $("#right").css({opacity : '100'});
  $("#left").css({opacity : '100'});
});

$("#right").click(function(){
  srt++;
 if(srt == idx_lgth){
      srt = 0;   
 } 
 $("#visual>div").eq(srt).addClass('on').siblings().removeClass('on'); $("section>a").eq(srt).addClass('on').siblings().removeClass('on');
});

$("#left").click(function(){
  srt--;
  if(srt == -1){
      srt = idx_lgth-1; 
  }
 $("#visual>div").eq(srt).addClass('on').siblings().removeClass('on');
  $("section>a").eq(srt).addClass('on').siblings().removeClass('on'); 
});
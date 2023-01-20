var slide = 1;
    $('.slide-1').on('click', function(){
    $('.slide-container').css('transform', 'translateX(Ovw)');
    slide = 1;
})
$('.slide-2').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-100vw)');
    slide = 2;
})
$('.slide-3').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-200vw)');
    slide = 3;
})
$('.prev').on('click', function(){
    if (slide == 3){
    $('.slide-container').css('transform', 'translateX(-100vw)');
    slide = 2;
    }else if (slide == 2) {
    $('.slide-container').css('transform', 'translateX(-Ovw)');
    slide = 1;
    }
})
$('.next').on('click', function(){
    if (slide == 1){
    $('.slide-container').css('transform', 'translateX(-100vw)');
    slide = 2;
    } else if (slide == 2) {
    $('.slide-container').css('transform', 'translateX(-200vw)');
    slide = 3;
    }
})
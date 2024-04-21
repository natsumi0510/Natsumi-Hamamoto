$(function(){
    $('a[href^="#"]').click(function(){
    const headerHeight = $('#header').outerHeight();
    const href = $(this).attr('href');
    const target = $(href =="#"|| href == "" ? "html" : href);
    const position = target.offset().top - headerHeight;
    $('html, body').animate({scrollTop: position}, 500);
});
});

// $(function(){
//     $(window).scroll(function (){
//         $('.fade').each(function(){
//             var position = $(this).offset().top;
//             var scroll = $(window).scrollTop();
//             var windowHeight = $(window).height();
//             if (scroll > position - windowHeight + 200){
//                 $(function(){
//                     $('.fade').each(function(i){
//                       $(this).delay(i * 200).queue(function(){
//                             $(this).addClass('active');
//                         });
//                     });
//                 });
//             }
//         });
//     });
// });	

// ハンバーガー
$('.h-btn').click(function(){
    $(this).toggleClass('active');
    $('header nav').fadeToggle();
});
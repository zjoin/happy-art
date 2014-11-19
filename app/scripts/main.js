'use strict';

 window.scrollReveal = new scrollReveal();

 

$(document).ready(function () {
    $("ul[data-liffect] li").each(function (i) {
        $(this).attr("style", "-webkit-animation-delay:" + i * 300 + "ms;"
                + "-moz-animation-delay:" + i * 300 + "ms;"
                + "-o-animation-delay:" + i * 300 + "ms;"
                + "animation-delay:" + i * 300 + "ms;");
        if (i == $("ul[data-liffect] li").size() -1) {
            $("ul[data-liffect]").addClass("play")
        }
    });
});

var nice = false;
$(document).ready(
    function() {
        nice = $("html").niceScroll();
    }
);


// Defer pointer events on animated header
$(window).load(function (){
  $('header').css({
    'pointer-events': 'auto'
  });
});





var nav = $('nav');   
function openMenu() {
   
    $('.fa-navicon').on('click', function() {
        nav.fadeIn(850);
//        $('.content').toggleClass('opac');  
//        var menuOverlay = $('<div class="menu-overlay"> </div>');
//        menuOverlay.appendTo(document.body)
//        $('.qaz').animate({width:'toggle'},350);      
        $('.qaz').fadeIn();     
    });
}

openMenu();

//$('.m-close-menu').on('click', function() {
//   $('.qaz').slideUp('fast'); 
//    nav.toggle();
//});

$('.m-close-menu').on('click', function() {
//   $('.qaz').animate({width:'toggle'},350);
   $('.qaz').fadeOut();
    nav.fadeOut();
  
});


// $(document).ready(function() {   
//
//       $(function() {
//
//  var $pageContent = $('.content');
//  
//  var loadContent = function(url) {
//    
//    $pageContent.fadeOut(function() {
//      $pageContent.load(url, function() {          
//        $pageContent.fadeIn();
//      });
//    });    
//  };  
//
//  
//  $('nav li a').on('click', function(event) {    
//       
//    loadContent($(this).attr('href') + ' .content > *');      
//       event.preventDefault();  
//  });  
//});  
//
//    });




// $(document).ready(function() {
//$('a').on('click', function(){
//    $(this).addClass('activ').siblings().removeClass('activ');
//});
// });
  
// Ajax with hustory bad working

//$(function() {
//    $('a').on('click', function(e) {
//        e.preventDefault();
//        
//        var href = $(this).attr("href") + ' .content > *';
//        loadContent(href);
//        history.pushState({}, '', href);
//    });
//    $(window).on('popstate', function() {
//        loadContent(location.pathname);
//    });
//});
//
//function loadContent(url) {
//    $('.content').load(url).hide().fadeIn(500);
//}



$('document').ready(function(){
    $('a').on('click', function(e){      
        // отменяем стандартное действие при клике
        e.preventDefault();
        // Получаем адрес страницы
        var href = $(this).attr('href');
        // Передаем адрес страницы в функцию
        getContent(href, true);       
    });
});

// Добавляем обработчик события popstate, 
// происходящего при нажатии на кнопку назад/вперед в браузере  
window.addEventListener("popstate", function(e) {
    // Передаем текущий URL
    getContent(location.pathname, false);
});

// Функция загрузки контента
function getContent(url, addEntry) {
    $.get(url).done(function(data) {
        // Обновление только текстового содержимого 
        $('.content').hide().html($(data).find(".content").html()).fadeIn(800,'swing');
       
        // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
        // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
        if(addEntry == true) {
            // Добавляем запись в историю, используя pushState
            history.pushState(null, null, url); 
        }
    });
}











//$(document).ready(function() {
//    $(window).load(function() {        
//         $('body')            
//            .delay(1000)
//            .fadeIn();
//    });
//});

 $('nav a').on('click',function() {
        $('.activ').removeClass('activ');
        $(this).addClass('activ');
    })



Pace.on('hide', function() {
   $('.pace-overlay').fadeOut();  
});




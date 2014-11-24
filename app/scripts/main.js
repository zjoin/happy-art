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



// TOGGLE MENU

var nav = $('nav');
var hamburger = $('.fa-navicon');
var closeMenuNav = $('.m-close-menu');
var toggleMenu = $('.toggle-menu');
closeMenuNav.hide();


(function openMenu() {   
    hamburger.on('click', function() {       
        nav.fadeIn(850);    
        toggleMenu.fadeIn(); 
        closeMenuNav.fadeIn();
     });
}());



(function closeMenu() {
  closeMenuNav.on('click', function() { 
       $(this).fadeOut();
       nav.fadeOut();
       toggleMenu.fadeOut(); 
  });
}());





$('document').ready(function(){
    $('a').on('click', function(e){      
        // отменяем стандартное действие при клике
        e.preventDefault();
       nav.fadeOut();
       toggleMenu.fadeOut();
       closeMenuNav.fadeOut();    
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




 $('nav a').on('click',function() {
        $('.activ').removeClass('activ');
        $(this).addClass('activ');
    })



Pace.on('hide', function() {
   $('.pace-overlay').fadeOut();  
});



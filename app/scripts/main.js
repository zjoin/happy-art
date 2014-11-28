'use strict';
window.scrollReveal = new scrollReveal(); 

// Появление галлереи
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


// Плавный скролл - требует замены
var nice = false;
$(document).ready(
    function() {
        nice = $("html").niceScroll();
    }
);

//
//$(window).load(function (){
//  $('header').css({
//    'pointer-events': 'auto'
//  });
//});



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



var navA = $('nav a');

$('document').ready(function(){
    navA.on('click', function(e){      
        // отменяем стандартное действие при клике
        e.preventDefault();
//       nav.fadeOut();
        var screen = $(window);
        if(screen.width < 768) {
            nav.fadeOut();
        } else {
                  nav.fadeIn(); 
                     }
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
        $('.content').hide().html($(data).find('.content').html()).fadeIn(800,'swing');
       
        // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
        // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
        if(addEntry == true) {
            // Добавляем запись в историю, используя pushState
            history.pushState(null, null, url); 
        }
    });
}





(function ToggleActiveMenu() {    
    navA.on('click',function() {
        $('.activ').removeClass('activ');
        $(this).addClass('activ');
    });
}());


// MY SETTINGS PRELOAD
Pace.on('hide', function() {
   $('.pace-overlay').fadeOut();  
});





// TOUCH GALLERY
(function links() {   
    var links = document.getElementById('links');
    links.addEventListener('click', function(event) {
         event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
    });
}());


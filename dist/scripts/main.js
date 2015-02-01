/*(function () {


  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();
*/
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


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


var modules = {
  $window: $(window),
  $html: $('html'),
  $body: $('body'),
  $container: $('.container'),
  
  init: function () {
    $(function () {
       modules.modals.init();
    });
  },
  
  modals: {
    trigger: $('.modal-trigger'),
    modal: $('.modal'),
    scrollTopPosition: null,
  
    init: function () {
      var self = this;
  
      if (self.trigger.length > 0 && self.modal.length > 0) {
        modules.$body.append('<div class="modal-overlay"></div>');
  
        self.triggers();
      }
    },
  
    triggers: function () {
      var self = this;
    
      self.trigger.on('click', function (e) {
        e.preventDefault();
      
        var $trigger = $(this);
      
        self.openModal($trigger, $trigger.data('modalId'));
      });
    
      $('.modal-overlay').on('click', function (e) {
        e.preventDefault();
        self.closeModal();
      });
    
      modules.$body.on('keydown', function(e){
        if (e.keyCode === 27) {
          self.closeModal();
        }
      });
    
      $('.modal-close').on('click', function(e) {
        e.preventDefault();
        self.closeModal();
      });
    },
    
    openModal: function (_trigger, _modalId) {
      var self = this,
          scrollTopPosition = modules.$window.scrollTop(),
          $targetModal = $('#' + _modalId);
      
      self.scrollTopPosition = scrollTopPosition;
      
      modules.$html
      .addClass('modal-show')
      .attr('data-modal-effect', $targetModal.data('modal-effect'));
      
      $targetModal.addClass('modal-show');
      
      modules.$container.scrollTop(scrollTopPosition);
    },
      
    closeModal: function () {
      var self = this;
      
      $('.modal-show').removeClass('modal-show');
      modules.$html
        .removeClass('modal-show')
        .removeAttr('data-modal-effect');
        
      modules.$window.scrollTop(self.scrollTopPosition);
    }
  }
};

modules.init();


var nav = $('nav');   
function openMenu() {
   
    $('.fa-navicon').on('click', function() {
        nav.fadeIn(850);
//        $('.content').toggleClass('opac');  
//        var menuOverlay = $('<div class="menu-overlay"> </div>');
//        menuOverlay.appendTo(document.body)
        $('.qaz').animate({width:'toggle'},350);      
    });
}

openMenu();

$('.m-close-menu').on('click', function() {
   $('.qaz').slideUp('fast'); 
    nav.toggle();
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




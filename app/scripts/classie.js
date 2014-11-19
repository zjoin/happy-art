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
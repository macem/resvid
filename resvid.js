/* @ name        : lazy
   @ description : replace links to images and show it when is in view 
   @ author      : marcin.soltysiuk@gmail.com 
   @ version     : 0.8
   @ date        : 15.11.2012 */

(function($) {
    
    var name = 'resvid';

    $.fn[name] = function () {
        var $all = this, $replaced;

        // event

        $all.one ('load', function() {
            
            $replaced = $('<div />').attr ({
                'class' : 'video-container'
            });

            $(this).wrap ($replaced);
        });

        function initialize () { 
            
            $all.trigger ('load');
        }

        // run

        initialize();
       
        return this;
    };
})($);

/*(function($, w, d) {
  // The code here

  var methods = {
    init : function( options ) { 
      // THIS 
    },
    show : function( ) {
      // IS
    },
    hide : function( ) { 
      // GOOD
    },
    update : function( content ) { 
      // !!! 
    }
  };

  $.fn.tooltip = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  };

})($, window, document);*/
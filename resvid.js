/* @ name        : resvid
   @ description : adjust iframe, object video for responsive design 
   @ author      : marcin.soltysiuk@gmail.com 
   @ version     : 0.9
   @ date        : 02.03.2013 */

(function($) {
    
    var name = 'resvid', 
        def = {
          class : 'flex-video',
          style : '.flex-video iframe, .flex-video object { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; min-height: 480px; min-width: 640px; }'
                + '.flex-video { height: 0; margin-bottom: 1em; overflow: hidden; padding-bottom: 67.5%; padding-top: 1.5625em; position: relative; }'  
    };

    // inject css

    $('<style type="text/css">' + def.style + '</style>').appendTo ('head');

    $.fn[name] = function (options) {
        var $all = this, _options = {};

        // inherit options

        $.extend (_options, def, options);

        $all.each (function () {
            this.options = _options;
        });

        // replace tag

        $all.one ('load', function() {
            var options = this.options, $new;

            $new = $('<div />').attr ({'class' : options.class});

            $(this).wrap ($new);
        });

        // init

        $all.trigger ('load');
       
        return this;
    };
})($);
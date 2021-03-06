


(function($) {
    "use strict";

    $.widget( "f7.f7Recaptcha", $.livestreet.lsComponent, {
        /**
         * Дефолтные опции
         */
        options: {
            sitekey:null,     
            callback:null,
            // Селекторы
            selectors: {
                
                
            },

            params: {}
        },
        id:null,

        /**
         * Конструктор
         *
         * @constructor
         * @private
         */
        _create: function () { 
            this._super();
            
            this.id = grecaptcha.render(
                this.element.get(0),
                {
                    sitekey:    this.option('sitekey'),
                    callback:   this.recaptcha_call.bind(this)
                }
            );
            
        },
        recaptcha_call:function(){
            console.log('recaptcha_call');
            this.option('callback')( grecaptcha.getResponse(this.id) );
        },
        execute:function(){
            console.log('execute');
            grecaptcha.reset(this.id);
            grecaptcha.execute(this.id);
        }
    });
})(jQuery);
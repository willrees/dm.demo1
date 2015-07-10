/// <reference path="../../../dm.core/typescript.definitions/dm.core.d.ts""/>

(function($) {
	dm.globalComponentFactory("bigText", function($) {
		//component definition.
		var bigText = {
			apply: function () {
				var config = dm.config.bigText;
				$('*').css('font-size', config.fontSize);	
			},
			remove: function () {
				$('*').css('font-size', 'inherit');
			}	
		};
		
		//Apply behaviour.
		bigText.apply();
		
		return bigText;
		
		
	}, {fontSize: '20px'}, $);
})(jQuery);
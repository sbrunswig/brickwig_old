/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($) {
	$.fn.unveil = function(threshold, callback) {
		var $w = $(window),
			th = threshold || 0,
			retina = window.devicePixelRatio > 1,
			imageVersion = getImageVersion(),
			attrib = retina? "data-src-retina" : "data-src-" + imageVersion,
			images = this,
			loaded;

		this.one("unveil", function() {
			var source = this.getAttribute(attrib);
			source = source || this.getAttribute("data-src-" + imageVersion);
			if (source) {
				this.setAttribute("src", source);
				if (typeof callback === "function") callback.call(this);
			}
		});

		function unveil() {
			var inview = images.filter(function() {
				var $e = $(this);
				//if ($e.is(":hidden")) return;

				var wt = $w.scrollTop(),
				wb = wt + $w.height(),
				et = $e.offset().top,
				eb = et + $e.height();

				return eb >= wt - th && et <= wb + th;
			});

			loaded = inview.trigger("unveil");
			images = images.not(loaded);
		}

		/* added by springcm */
		function getImageVersion() {
			var width = window.innerWidth;

			// sizes: small = 320, medium = 640, high = 720
			if (width > 320 && width <= 640) {
				return "medium";
			} else if (width > 640) {
				return "high";
			} else {
				return "small"; // default version
			}
		}

		$w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

		unveil();

		return this;
	};
})(window.jQuery);
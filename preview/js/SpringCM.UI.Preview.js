(function(global)
{
	///Register SpringCM namespace.
	if (typeof (global.SpringCM) != "object")
	{
		//Create only if it does not exist
		if (typeof (global.SpringCM) == "undefined")
		{
			global.SpringCM = {};
		}
	}


	///Register SpringCM-Preview element.
	///<springcm-preview></springcm-preview>
	var proto = Object.create(HTMLElement.prototype);
	proto.createdCallback = function()
	{
		//Just for testing; real version will get the pages from a document page count.
		//var pages = this.getAttribute("pages") || 1;

		this.innerHTML = "";
		//for (var i = 0; i < pages; i++)
		//{
		//	this.innerHTML += '<div class="pages"></div>';
		//}

	};

	global.SpringCM.DocumentPreview = global.document.registerElement("springcm-preview", { prototype: proto });


	// preview component js object
	var s, PreviewComponent = {
		settings: {
			threshold: 500,
			page: "div.page",
			pagePlaceholder: "page--placeholder",
			shadow: "shadow--z-1",
			errorImage: "images/404.png"
		},

		init: function () {
			s = this.settings;
			s.pageItem = $("img.page__item");

			this.bindUIActions();
		},

		bindUIActions: function () {
			s.pageItem.unveil(s.threshold, function () {
				$(this).on("load", function () {
					var ratioHeight = $(this)[0].height; //get height of new image
					var ratioWidth = $(this).parents(s.page).outerWidth(); //get width of image container
					var ratio = (ratioHeight / ratioWidth) * 100 + '%'; //get new ratio
					//$(this).addClass(s.shadow); //add style to image
					$(this).parents(s.page).css({ 'padding-top': ratio }).removeClass(s.pagePlaceholder); //resize container and remove style
				}).on("error", function () {
					$(this).unbind("error").attr("src", s.errorImage);
				});
			});
		},
	}

	// lazy load images into springcm-preview component
	var url = 'http://brickwig.com/preview/image.json?callback=?';
	$.ajax({
		type: 'GET',
		url: url,
		async: false,
		jsonpCallback: 'jsonCallback',
		contentType: "application/json",
		dataType: 'jsonp',
		success: function (data) {
			$.each(data.images, function (i, image) {
				$("<img>").addClass("page__item").attr("src", "images/spinner.svg").attr("data-src-small", data.images[i].imageurlS).attr("data-src-medium", data.images[i].imageurl).attr("data-src-high", data.images[i].imageurl).appendTo($("<div>").addClass("page page--placeholder").appendTo("springcm-preview"));
			});
			PreviewComponent.init();
		},
		error: function (e) {
			//TODO: add error message
		}
	});


})(window);

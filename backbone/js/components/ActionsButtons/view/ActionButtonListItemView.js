App.ActionButtonListItemView = Backbone.View.extend({

	tagName: "button",
	actionButtonModel: null,


	events: {},

	initialize: function( options ) {
		this.actionButtonModel = options.model;
		this.addClassName();
	},

	render: function(){
		return this.$el;
	},

	addClassName: function() {
		this.$el.addClass( 'icon-' + this.actionButtonModel.get( 'ImageName' ) );
	}

});
App.ActionButtonListView = Backbone.View.extend({
	
	actionButtonsCollection: null,

	el: $( ".action-buttons" ),

	events: {
		"click .toggle-button" : "toggleMenu"
	},

	initialize: function( options ) {
		this.actionButtonsCollection = options.actionButtonsCollection;

		// Example of Fetch if JSON was on Server or reading from local file system or server
		//
		// var that = this;
		// this.actionButtonsCollection.fetch({
		// url: "/data/ActionsButtons.json",
		// 	success: function() {
		// 		that.populateActionButtons();
		// 	}
		// });
	},

	render: function() {
		_.each( this.actionButtonsCollection.models, function( button ){
			var view = new App.ActionButtonListItemView({
				model: button
			});
			this.$( '.action-button-list' ).append( view.render() );
		}, this);
		return this;
	},

	toggleMenu: function() {
		this.$el.toggleClass( 'toggled' );
	}

});

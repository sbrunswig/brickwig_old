App.InformationListView = Backbone.View.extend({

	documentCollection: null,

	el: $( ".list-information" ),

	render: function() {
		_.each( this.$('li'), function( section ){
			var view = new App.InformationListItemView({
				el: section,
				documentCollection: this.documentCollection
			});
		}, this);
		return this;

	},

	initialize: function( options ) {
		this.documentCollection = options.documentCollection;
	}

});

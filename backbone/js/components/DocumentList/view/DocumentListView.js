App.DocumentListView = Backbone.View.extend({

	documentCollection: null,

	el: $( ".document-list tbody" ),

	events: {},

	initialize: function( options ) {
		this.documentCollection = options.documentCollection;

		// Example of Fetch if JSON was on Server or reading from local file system
		//
		// var that = this;
		// this.documentCollection.fetch({
		// url: "/data/Documents.json",
		// 	success: function() {
		// 		that.populateDocuments();
		// 	}
		// });
	},

	render: function() {
		_.each( this.documentCollection.models, function( document ){
			var view = new App.DocumentListItemView({
				model: document,
				collection: this.documentCollection
			});
			this.$el.append( view.render() );
		}, this);
		return this;
	}

});

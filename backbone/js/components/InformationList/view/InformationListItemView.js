App.InformationListItemView = Backbone.View.extend({

	documentCollection: null,

	template: App.InformationListTemplate,

	events: {
		"click a" : "handleDocumentSelect"
	},

	initialize: function( options ) {
		this.documentCollection = options.documentCollection;
	},

	render: function(){
		return this.$el;
	},

	handleDocumentSelect: function( event ) {
		$( '.list-information a' ).removeClass( 'selected' );
		this.$( 'a' ).addClass( 'selected' );

		var selectType = $( event.currentTarget ).data( 'type' );
		var filteredCollection = this.documentCollection.where({ "Icon": selectType });

		if ( selectType === "reset" ) {
			this.setAllActiveFalse( false );
		} else {
			this.setAllActiveFalse( true );
			_.each( filteredCollection, function( filteredModel ){
				filteredModel.set( { 'Selected': true } );
			}, this);
		}

		return false;
	},

	setAllActiveFalse: function( keepSilent ) {
		_.each( this.documentCollection.models, function( currentModel ){
			currentModel.set( { 'Selected': false }, { silent: keepSilent } );
		}, this);
	}

});
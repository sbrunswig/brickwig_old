App.DocumentListItemView = Backbone.View.extend({

	tagName: "tr",
	documentModel: null,
	documentCollection: null,
	calendarMonths: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],

	template: App.DocumentListTemplate,

	events: {
		'change .select-document': "handleManualCheckChange"
	},

	initialize: function( options ) {
		_.bindAll( this, 'toggleHighlight' );
		this.documentModel = options.model;
		this.documentCollection = options.collection;

		if ( this.documentModel.get( 'Type' ) === "Document" ) {
			this.documentModel.set( 'Icon', this.getFileFormat( this.documentModel.get( 'Name' ) ) );
		} else {
			this.documentModel.set( 'Icon', 'folder' );
		}
		this.documentModel.set({
			'FormatDate':this.formatDate( this.documentModel.get( 'ModifiedDate' ) ),
			'id': this.documentModel.cid
		});

		this.documentCollection.on( 'change:Selected', this.toggleHighlight );

	},

	render: function(){
		console.log( this.documentModel );
		this.$el.html( this.template( this.documentModel.toJSON() ) );
		return this.$el;
	},

	getFileFormat: function( fileString ) {
		return fileString.substr( fileString.lastIndexOf( '.' ) + 1 );
	},

	handleManualCheckChange: function() {
		if ( this.documentModel.get( 'Selected' ) ) {
			this.deselectDocument();
		} else {
			this.selectDocument();
		}
	},

	selectDocument: function() {
		this.$el.addClass( 'selected' );
		this.documentModel.set( { 'Selected': true }, { silent: true } );
	},

	deselectDocument: function() {
		this.$el.removeClass( 'selected' );
		this.documentModel.set( { 'Selected': false }, { silent: true } );
	},

	toggleHighlight: function() {
		if ( this.documentModel.get( 'Selected' ) ) {
			this.$( '.select-document' ).prop( 'checked', true );
			this.selectDocument();
		} else {
			this.$( '.select-document' ).prop( 'checked', false );
			this.deselectDocument();
		}
	},

	formatDate: function( date ) {
        var dateObject = new Date( date );
        var isPm = dateObject.getHours() > 12;
        var hours = isPm ? dateObject.getHours() - 12 : dateObject.getHours();
        var timeOfDay = isPm ? "PM" : "AM";
        return this.calendarMonths[ dateObject.getMonth() ] + " " + dateObject.getDate() + ", " + dateObject.getFullYear() + " at " + hours + ":" + dateObject.getMinutes() + " " + timeOfDay;
    }


});
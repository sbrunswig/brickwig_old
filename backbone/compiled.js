this["App"] = this["App"] || {};

this["App"]["DocumentListTemplate"] = function(data) {
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<td>\n\t<h3 class="icon-' +
((__t = ( data.Icon )) == null ? '' : __t) +
'">\n\t\t' +
((__t = ( data.Name )) == null ? '' : __t) +
'\n\t\t';
 if ( data.Description ) { ;
__p += '\n\t\t\t<span>' +
((__t = ( data.Description )) == null ? '' : __t) +
'</span>\n\t\t';
 } ;
__p += '\n\t</h3>\n</td>\n<td>' +
((__t = ( data.FormatDate )) == null ? '' : __t) +
'</td>\n<td class="select">\n\t<input type="checkbox" id="' +
((__t = ( data.id )) == null ? '' : __t) +
'" class="select-document"/>\n\t<label for="' +
((__t = ( data.id )) == null ? '' : __t) +
'">select ' +
((__t = ( data.Name )) == null ? '' : __t) +
'</label>\n</td>';
return __p
};
App.ActionButton = Backbone.Model.extend({
	
	defaults: function() {
		return {
    		Name: null,
        	ImageName: null
  		}
  	}

});
App.Document = Backbone.Model.extend({
	
	defaults: function() {
		return {
    		Description: null,
    		FormatDate: null,
    		Icon: null,
    		ModifiedDate: null,
    		Name: null,
    		Type: null,
        Selected: false,
        id: null
  		}
  	}

});
App.ActionButtons = Backbone.Collection.extend({

	model: App.ActionButton,

	initialize: function() {}

});
App.Documents = Backbone.Collection.extend({

	model: App.Document,

	initialize: function() {}

});
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

App.AppView = Backbone.View.extend({

	// This would usually be fetched from the server in the view
	// instead of manually loaded into the collection.
	// Not setting this in external file due to avoiding 
	// CORS isssues on different machines locally
	documentJSON: [{"Type":"Folder","Name":"Sub Folder","Description":"Sub Folder Description","ModifiedDate":"1/21/2014 2:56 PM"},{"Type":"Folder","Name":"Test 2","Description":"","ModifiedDate":"1/21/2014 2:54 PM"},{"Type":"Folder","Name":"Test","Description":"","ModifiedDate":"1/21/2014 2:53 PM"},{"Type":"Folder","Name":"New Folder","Description":"","ModifiedDate":"1/21/2014 2:53 PM"},{"Type":"Document","Name":"Send Documents Usability.docx","Description":"Document Description","ModifiedDate":"1/21/2014 3:55 PM"},{"Type":"Document","Name":"Star Image.png","Description":"","ModifiedDate":"1/21/2014 3:45 PM"},{"Type":"Document","Name":"Coming Soon Text for Login Page.docx","Description":"","ModifiedDate":"1/21/2014 3:15 PM"},{"Type":"Document","Name":"Internationalization_Notes.pdf","Description":"","ModifiedDate":"1/21/2014 2:58 PM"},{"Type":"Document","Name":"Test Document.docx","Description":"This is a test document","ModifiedDate":"1/21/2014 2:55 PM"},{"Type":"Document","Name":"Spreadsheet.xlsx","Description":"","ModifiedDate":"1/21/2014 2:35 PM"},{"Type":"Document","Name":"Moon Image.png","Description":"","ModifiedDate":"1/21/2014 2:27 PM"},{"Type":"Document","Name":"Presentation Deck.ppt","Description":"","ModifiedDate":"1/21/2014 1:37 PM"}],
	actionButtonJSON: [{"Name":"Upload","ImageName":"upload"},{"Name":"Create Folder","ImageName":"create_folder"},{"Name":"Share","ImageName":"share"},{"Name":"Cut","ImageName":"cut"},{"Name":"Manage Attributes","ImageName":"tag"},{"Name":"Copy","ImageName":"copy"},{"Name":"Paste","ImageName":"paste"},{"Name":"Search","ImageName":"search"},{"Name":"Folder Settings","ImageName":"folder_settings"},{"Name":"Send Email","ImageName":"send_email"}],

	initialize: function() {
		
	},

	render: function(){

		var documentCollection = new App.Documents( this.documentJSON );
		var actionButtonsCollection = new App.ActionButtons( this.actionButtonJSON );

		var informationListView = new App.InformationListView({
			documentCollection: documentCollection
		});
		informationListView.render();

		var documentListView = new App.DocumentListView({
			documentCollection: documentCollection
		});
		documentListView.render();

		var actionButtonListView = new App.ActionButtonListView({
			actionButtonsCollection: actionButtonsCollection
		});
		actionButtonListView.render();

	}

});

var appView = new App.AppView();
appView.render();
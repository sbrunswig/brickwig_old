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
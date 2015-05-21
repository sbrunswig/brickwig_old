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
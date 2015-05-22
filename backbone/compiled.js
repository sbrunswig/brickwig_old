var startData = [
    {
        "id": "p1",        
        "name" : "AAAA",
        "title" : "BBBB",
        "background" : "CCCC"
    },
    {
        "id": "p2",
        "name" : "DDDD",
        "title" : "EEEE",
        "background" : "FFFF"
    },
    {
        "id": "p3",        
        "name" : "GGGG",
        "title" : "HHHH",
        "background" : "IIII"
    }
];

var addData = [
    {
        "id": "p4",        
        "name" : "sdfsdfsdf",
        "title" : "sdfsdf",
        "background" : "sdfsdf"
    },
    {
        "id": "p5",
        "name" : "DDDssssD",
        "title" : "EsssEEE",
        "background" : "ssssFFFF"
    },
    {
        "id": "p6",        
        "name" : "GGssdsfGG",
        "title" : "HsdfHHH",
        "background" : "IIaaaaII"
    }
];
var Profile = Backbone.Model.extend();

var ProfileList = Backbone.Collection.extend({
    model: Profile,
    url: 'jsonSample.json'
});

var ProfileView = Backbone.View.extend({
    el: "#profiles",
    template: _.template($('#profileTemplate').html()),
    initialize: function(){
        this.listenTo(this.collection,"add", this.renderItem);          
    },
    render: function () {
        this.collection.each(function(model){
             var profileTemplate = this.template(model.toJSON());
             this.$el.append(profileTemplate);
        }, this);        
        return this;
    },
    renderItem: function(profile) {
         var profileTemplate = this.template(profile.toJSON());
         this.$el.append(profileTemplate);        
    }
});

var profileList = new ProfileList(startData);
var profilesView = new ProfileView({ collection: profileList });
profilesView.render();
profileList.add(addData);

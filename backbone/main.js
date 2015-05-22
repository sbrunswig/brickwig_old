var startData = [
 {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "X", "description" : "", "item" : {"category" : "", "category_id" : "710", "image_url" : "http://img.bricklink.com/OL/10218-1.jpg", "name" : "Pet Shop", "no" : "10218-1", "type" : "SET", "weight" : "2820.00"}, "new_or_used" : "N", "quantity" : 1, "remarks" : "", "unit_price" : "249.0000"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "Legends of Chima", "category_id" : "787", "image_url" : "http://img.bricklink.com/OL/30264-1.jpg", "name" : "Frax' Phoenix Flyer polybag", "no" : "30264-1", "type" : "SET", "weight" : "23.00"}, "new_or_used" : "N", "quantity" : 10, "remarks" : "", "unit_price" : "3.5000"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "", "category_id" : "34", "image_url" : "http://img.bricklink.com/OL/30230-1.jpg", "name" : "Mini Mech polybag", "no" : "30230-1", "type" : "SET", "weight" : ""}, "new_or_used" : "N", "quantity" : 10, "remarks" : "", "unit_price" : "3.5000"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "Town", "category_id" : "67", "image_url" : "http://img.bricklink.com/OL/30311-1.jpg", "name" : "Swamp Police Helicopter Polybag", "no" : "30311-1", "type" : "SET", "weight" : "45.00"}, "new_or_used" : "N", "quantity" : 10, "remarks" : "", "unit_price" : "3.7500"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "", "category_id" : "771", "image_url" : "http://img.bricklink.com/OL/30115-1.jpg", "name" : "Jungle Boat polybag", "no" : "30115-1", "type" : "SET", "weight" : "31.00"}, "new_or_used" : "N", "quantity" : 10, "remarks" : "S-30115", "unit_price" : "3.3000"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "Friends", "category_id" : "771", "image_url" : "http://img.bricklink.com/OL/30202-1.jpg", "name" : "Smoothie Stand", "no" : "30202-1", "type" : "SET", "weight" : "28.00"}, "new_or_used" : "N", "quantity" : 10, "remarks" : "", "unit_price" : "4.9900"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "Town", "category_id" : "67", "image_url" : "http://img.bricklink.com/OL/30313-1.jpg", "name" : "Garbage Truck polybag", "no" : "30313-1", "type" : "SET", "weight" : "0.00"}, "new_or_used" : "N", "quantity" : 10, "remarks" : "", "unit_price" : "6.5000"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "", "category_id" : "65", "image_url" : "http://img.bricklink.com/OL/30246-1.jpg", "name" : "Imperial Shuttle polybag", "no" : "30246-1", "type" : "SET", "weight" : "43.40"}, "new_or_used" : "N", "quantity" : 1, "remarks" : "", "unit_price" : "6.0000"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "", "category_id" : "67", "image_url" : "http://img.bricklink.com/OL/30226-1.jpg", "name" : "Police Helicopter polybag", "no" : "30226-1", "type" : "SET", "weight" : ""}, "new_or_used" : "N", "quantity" : 1, "remarks" : "", "unit_price" : "6.0000"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "Legends of Chima", "category_id" : "787", "image_url" : "http://img.bricklink.com/OL/30265-1.jpg", "name" : "Worriz' Fire Bike polybag", "no" : "30265-1", "type" : "SET", "weight" : "31.00"}, "new_or_used" : "N", "quantity" : 1, "remarks" : "", "unit_price" : "6.0000"}, {"color_id" : 0, "color_name" : "(Not Applicable)", "completeness" : "S", "description" : "", "item" : {"category" : "Legends of Chima", "category_id" : "787", "image_url" : "http://img.bricklink.com/OL/30250-1.jpg", "name" : "Ewar's Acro-Fighter polybag", "no" : "30250-1", "type" : "SET", "weight" : "22.60"}, "new_or_used" : "N", "quantity" : 1, "remarks" : "", "unit_price" : "5.0000"}
];

var Product = Backbone.Model.extend();

var ProductList = Backbone.Collection.extend({
    model: Product,
    url: 'jsonSample.json'
});

var ProductView = Backbone.View.extend({
    el: "#products",
    template: _.template($('#productTemplate').html()),
    initialize: function(){
        this.listenTo(this.collection,"add", this.renderItem);          
    },
    render: function () {
        this.collection.each(function(model){
             var productTemplate = this.template(model.toJSON());
             this.$el.append(productTemplate);
        }, this);        
        return this;
    },
    renderItem: function(product) {
         var productTemplate = this.template(product.toJSON());
         this.$el.append(productTemplate);        
    }
});

var productList = new ProductList(startData);
var productsView = new ProductView({ collection: productList });
productsView.render();

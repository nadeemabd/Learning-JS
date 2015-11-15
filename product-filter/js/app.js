var Products = function(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
};

var shoe1 = new Products("Nike", 199.99, "Shoes");
var shoe2 = new Products("Addidas", 299.99, "Shoes");
var shoe3 = new Products("Reebok", 99.99, "Shoes");
var tshirt1 = new Products("Nike", 29.99, "T-shirts");
var tshirt2 = new Products("Polo", 59.99, "T-shirts");
var tshirt3 = new Products("Max", 39.99, "T-shirts");
//
//console.log(shoe1.name);
//
//var Grid = function() {}
//
//Grid.prototype.render = function() {
//    $("#grid").html(function() {
//        var content = '<h1 id="shoe1Name">' + shoe1.name + '</h1>';
//        content += '<p id="shoe1Price">' + shoe1.price + '</p>';
//        return content;
//    });
//};
//
//Grid.prototype.reRender = function(price) {
//    shoe1.price = price
//    $("#shoe1Price").html(function() {
//        return shoe1.price;
//    });
//}
//
//var newGrid = new Grid();
//
//newGrid.render();
//
//$("#changePrice").click(function() {
//    var newPrice = $("#getPrice").val();
//    console.log(newPrice);
//
//    newGrid.reRender(newPrice);
//});

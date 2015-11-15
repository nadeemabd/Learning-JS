'use strict';


function Row() {
//    this.rowTemplate = '';
}

Row.prototype.createRow = function (filteredData) {

    this.rowTemplate = '';

    for (var key in data.products) {
        if (this.isFound(filteredData, key)) {
            $('row').innerHTML = this.createRowTemplate(key);
        }
    }

    if (filteredData.length === 0) {
        for (var key in data.products) {
            $('row').innerHTML = this.createRowTemplate(key);
        }

    }
}

Row.prototype.isFound = function(filteredData, key) {
    return (filteredData.indexOf(data.products[key].name.toString()) !== -1 ||
            filteredData.indexOf(data.products[key].price.toString()) !== -1 ||
            filteredData.indexOf(data.products[key].category.toString()) !== -1);
}

Row.prototype.createRowTemplate = function(key) {
    this.rowTemplate += '<li class="row">';
    this.rowTemplate += '<ul>';
    this.rowTemplate += '<li class="name">' + data.products[key].name + "</li>";
    this.rowTemplate += '<li class="price">' + data.products[key].price + "</li>";
    this.rowTemplate += '<li class="category">' + data.products[key].category + "</li>";
    this.rowTemplate += "</ul>";
    this.rowTemplate += '</li>';
    return this.rowTemplate;
}

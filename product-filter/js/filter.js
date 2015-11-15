"use strict";

function Filters() {
    this.name = [];
    this.price = [];
    this.category = [];
    this.data = data.products;
    this.filterData = [];

    this.createFilter("nameFilter", this.name, "name");
    this.createFilter("priceFilter", this.price, "price");
    this.createFilter("categoryFilter", this.category, "category");

    this.getFilterClick("nameFilter");
    this.getFilterClick("priceFilter");
    this.getFilterClick("categoryFilter");

}

Filters.prototype.getFilterClick = function (id) {

    $(id).addEventListener("change", function (event) {

        var target = f.getEventTarget(event);
        var targetIndex = f.filterData.indexOf(target.value);

        if (target.checked === true) {
            console.log(target.value);
            f.filterData.push(target.value);
            g.render(f.filterData);
            return true;
        }

        if (target.checked === false) {
            var farray1 = f.filterData.slice(0, targetIndex);
            var farray2 = f.filterData.slice(targetIndex + 1);
            f.filterData = farray1.concat(farray2);
            console.log(f.filterData);
            g.render(f.filterData);
            return true;
        }

        return false;
    });

}


Filters.prototype.createFilter = function (id, prop, key) {
    var filterTemplate = "";

    for (var i = 0; i < this.data.length; i++) {
        if (prop.indexOf(this.data[i][key]) === -1) {
            prop.push(this.data[i][key].toString());
        }
    }

    for (var key in prop) {
        filterTemplate += '<li class="row">';
        filterTemplate += '<input type="checkbox" class="name" value="' + prop[key] + '">' + prop[key];
        filterTemplate += '</li>';

        $(id).innerHTML = filterTemplate;
    }

    return prop;
}

Filters.prototype.getEventTarget = function (e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var f = new Filters();

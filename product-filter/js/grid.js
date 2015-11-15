"use strict";

var $ = function getId(id) {
    return document.getElementById(id);
};

function Grid() {
    this.row = new Row();
}

Grid.prototype.render = function(filteredData) {
    if(filteredData) {
        return this.row.createRow(filteredData);
    } else {
        filteredData = [];
        return this.row.createRow(filteredData);
    }
    return false;
};


var g = new Grid();
g.render();

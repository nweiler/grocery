const fs = require('fs');
const _ = require('lodash');

//var file = fs.readdirSync('.');
var file = '09072022.txt';

console.log(file);

var data = fs.readFileSync(file).toString();

var _item;
var _props;
var items = [];

data = data.split('\n\n');
_.each(data, function(d) {
  _data = d.split('\n');
  try {
    //console.log(d);
    console.log(_data);
    _item = {};

    _item.name=_data[1];
    _item.quantity=_data[2];
    _item.price=_data[3];
    //_item.cost = _item.quantity * _item.price;
    console.log(_item);
    items.push(_item);
  }
  catch (e) {
    console.log(e);
  }
});

//console.log(items);
_.each(items, function(i) {
  console.log(i.name, i.price);
  console.log();
});


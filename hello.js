'use strict';

var s = 'Hello';
var t = 'Byebye';

function greet(name) {
    console.log(s + ',' + name + '!');
}

function bye(name) {
    console.log(t + ',' + name + '!');
}

var x;
var y;

function add(x, y) {
    let z = x + y;
    console.log(x + ' + ' + y + ' = ' + z);
}


function fancyhello() {
        var n;
        //'setName is not a function' not sure how to fix
        this.setName = function(input) {
            this.n = input;
        };
        this.sayHello = greet(n);
        this.sayByebye = bye(n);
};

module.exports = {
    add: add,
    greet: greet,
    bye: bye,
};

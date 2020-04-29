var stuff = require('./count');
var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var James = new Person('james');
var Mary = new Person('mary');
var Ryu = new Person('ryu');
var people = [James, Mary, Ryu];

people.forEach(function(person){
  person.on('speak', function(msg) {
    console.log(person.name + ' said: ' + msg);
  });
});

James.emit('speak', 'hey dudes');
Ryu.emit('speak', 'I want curry');

// Event emitter
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg){
  console.log(msg);
});

myEmitter.emit('someEvent', 'The event was emitted');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));

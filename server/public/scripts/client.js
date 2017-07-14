console.log('JS Sourced');
var myApp = angular.module('myApp', []);  //Will leave empty for now

myApp.controller('WelcomeController', function(){

  //Code that runs when our controller is initiailized
  // Similar to document ready
  var welcome = this; //Represents the WelcomeController
  welcome.message = 'Hello!';
  console.log('WelcomeController');
  welcome.array = [];

  welcome.greet = function(name, message) {
    console.log('Hello,', name);
    console.log('Message', message);
    //welcome.message = name + ' ' + message;

    var string = name + ' ' + message;

    welcome.array.push(string);
    console.log(welcome.array);

    //welcome.message = welcome.array;
  };
  welcome.delete = function(index) {
    welcome.array.splice(index, 1);
  };

});

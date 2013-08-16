$(function() {
  var helloWorldController = {
    // controller name
    __name: 'HelloWorldController',

    // event handler
    '#btn click': function() {
      alert('Hello World');
    }
  };

  // event binding
  h5.core.controller('#container', helloWorldController);
});

var makeSquareDancerFaded = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  // inheriting properties from makeDancer
  makeDancer.call(this, top, left, timeBetweenSteps);

    // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="square-dancer-faded"></span>');

  this.setPosition(top, left);

};

// Inheriting the prototype from makeDancer
makeSquareDancerFaded.prototype = Object.create(makeDancer.prototype);

// re-assigning the overwritten constructor
makeSquareDancerFaded.prototype.constructor = makeSquareDancerFaded;

makeSquareDancerFaded.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // calling the superclass's step function
  makeDancer.prototype.step.call(this);


  // this.$node.toggle();
};


var makeEmojiDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  // inheriting properties from makeDancer
  makeDancer.call(this, top, left, timeBetweenSteps);

  //Overrwriting this.$node from dancer.js
  this.$node = $('<span class="dancer"><span class="face">' + this.face() + '</span><span class="body"></span></span>');

  this.setPosition(top, left);
};

// Inheriting the prototype from makeDancer
makeEmojiDancer.prototype = Object.create(makeDancer.prototype);

// re-assigning the overwritten constructor
makeEmojiDancer.prototype.constructor = makeEmojiDancer;

makeEmojiDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // calling the superclass's step function
  makeDancer.prototype.step.call(this);

  //Do something with jquery here
  // this.$node.toggle();
};

makeEmojiDancer.prototype.face = function() {
  var emojis = [];
  for (var i = 600; i < 640; i++) {
    emojis.push('&#x1f' + i);
  }
  var randomFace = Math.floor(Math.random() * emojis.length);
  return emojis[randomFace];
};


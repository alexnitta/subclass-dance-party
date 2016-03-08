var makeRecordDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  // inheriting properties from makeDancer
  makeDancer.call(this, top, left, timeBetweenSteps);
  var selection = this.select();
  var artwork = selection['artwork'];
  //Overrwriting this.$node from dancer.js
  this.$node = $('<span class="album"><img src="' + artwork + '"></span>');

  // this.setPosition(top, left);
};

// Inheriting the prototype from makeDancer
makeRecordDancer.prototype = Object.create(makeDancer.prototype);

// re-assigning the overwritten constructor
makeRecordDancer.prototype.constructor = makeRecordDancer;

makeRecordDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // calling the superclass's step function
  makeDancer.prototype.step.call(this);

  //Do something with jquery here
  // this.$node.toggle();
};


makeRecordDancer.prototype.select = function() {
  var records = [
    {artwork: 'img/album2.jpg', music: 'song.mp3' },
    {artwork: 'img/spiral_200.png', music: 'song2.mp3' }
  ];

  var random = Math.floor(Math.random() * records.length);
  return records[random];
};

makeRecordDancer.prototype.play = function() {

};
makeRecordDancer.prototype.pause = function() {

};

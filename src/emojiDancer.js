var makeEmojiDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  // inheriting properties from makeDancer
  makeDancer.call(this, top, left, timeBetweenSteps);

  //Overrwriting this.$node from dancer.js
  this.$node = $('<span class="dancer"><span class="face ' + this.action() + '">' + this.face() + '</span><span class="body"></span></span>');

  this.setPosition(top - 150, left);
  if (dancers.length > 0) {
    this.reactToPosition(top - 150, left);
  }
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

makeEmojiDancer.prototype.action = function() {
  var actions = ['rocking', 'pulsating'];
  var randomAction = Math.floor(Math.random() * actions.length);
  return actions[randomAction];
};

makeEmojiDancer.prototype.lineup = function(newLeft, newTop) {
  console.log('lineup method called on dancer instance' + this);
  $(this.$node).css({'left': newLeft, 'top': newTop});
};

makeEmojiDancer.prototype.reactToPosition = function(top, left) {
  makeDancer.prototype.setPosition.call(this, top, left);
  var distances = [];

  for (var i = 0; i < dancers.length; i ++) {
    var x1 = left;
    var y1 = top;
    var x2 = dancers[i].left;
    var y2 = dancers[i].top;
    var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
    distances.push(dist);
  }

  // Get the closet dancer
  var closest = 9999;
  for (var i = 0; i < distances.length; i++) {
    if (distances[i] < closest) {
      closest = distances[i];
    }
  }
  var closestIndex = distances.indexOf(closest);
  console.log( "CLOSEST: " + distances[closestIndex]);

  // swap the positions of the dancers
  var closestDancer = dancers[closestIndex];
  var whatisThis = this;
  // debugger;

  var $dancefloorWidth = $('#dance-floor').width();

  var newLeft = 80;
  if (closestDancer.left > $dancefloorWidth / 2) {
    newLeft *= -1;
  }

  $(closestDancer.$node).css({'left': left + newLeft, 'top': top});


};
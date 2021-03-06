$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('#dance-floor').height() * Math.random(),
      $('#dance-floor').width() * Math.random(),
      Math.random() * 1000
    );
    $('#dance-floor').append(dancer.$node);

    // add dancer to global dancers array
    dancers.push(dancer);
  });

  $('.lineUpDancersButton').on('click', function() {

    var $dancefloorWidth = $('#dance-floor').width();
    var gap = $dancefloorWidth / dancers.length;
    var left = 0;
    for (var i = 0; i < dancers.length; i++) {
      console.log(dancers[i]);
      dancers[i].lineup(left,50);
      left += gap;
    }

  }); 

  var shuffleAlbums = function() {
    for (var i = 0; i <= 10; i++) {
      console.log(i);
      var album = new makeRecordDancer();
      $('#albums').append(album.$node);
    }  
  };
  shuffleAlbums();
});


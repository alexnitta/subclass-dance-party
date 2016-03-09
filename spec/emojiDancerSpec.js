describe('emojiDancer', function() {

  var emojiDancer, clock;
  var timeBetweenSteps = 100;
  window.dancers = [];

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    emojiDancer = new makeEmojiDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(emojiDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have methods named "face" and "action"', function() {
    expect(emojiDancer.face).to.be.a('function');
    expect(emojiDancer.action).to.be.a('function');
  });

  it('should generate random faces', function() {
      expect(emojiDancer.face()).to.not.equal(emojiDancer.face());
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(emojiDancer, 'step');
      expect(emojiDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(emojiDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(emojiDancer.step.callCount).to.be.equal(2);
    });
  });
});

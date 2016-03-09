describe('recordDancer', function() {

  var recordDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    recordDancer = new makeRecordDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(recordDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have methods named "select", "play" and "pause"', function() {
    expect(recordDancer.select).to.be.a('function');
    expect(recordDancer.play).to.be.a('function');
    expect(recordDancer.pause).to.be.a('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(recordDancer, 'step');
      expect(recordDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(recordDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(recordDancer.step.callCount).to.be.equal(2);
    });
  });
});

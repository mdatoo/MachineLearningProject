describe('InputOutput', function() {
    describe('#initialisation', function() {
        it('should create object of bools of length 4', function() {
            var inputOutput = new InputOutput();
            expect(Object.keys(inputOutput.keys).length).to.eql(4);
        });
        it('all elements should be false', function() {
            var inputOutput = new InputOutput();
            expect(inputOutput.keys.left).to.eql(false);
            expect(inputOutput.keys.up).to.eql(false);
            expect(inputOutput.keys.right).to.eql(false);
            expect(inputOutput.keys.down).to.eql(false);
        });
    });
});
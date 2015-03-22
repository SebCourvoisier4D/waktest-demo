describe("My Studio test", function () {
	this.timeout(1000 * 60 * 2);
	
	beforeEach(function(done){
		setTimeout(done, 250);  // Delay between each test case in millisecond
	});
	
	it("is expected to do create a new JavaScript file", function () {
		expect(currentProjectBasePath).to.not.be.an('undefined');
		var myFile = new studio.File(currentProjectBasePath + 'tempo.js');
		expect(myFile).to.be.an('object');
		expect(myFile).to.have.property('exists');
		expect(myFile.exists).to.be.false;
		myFile.create();
	});
	
	it("is expected to open the new JavaScript file", function () {
		var myFile = new studio.File(currentProjectBasePath + 'tempo.js');
		studio.openFile(myFile);
		var documentPath = studio.currentEditor.getEditingFile().path;
		expect(documentPath).to.equal(myFile.path);
	});
	
	it("and now it does some silly stuff...", function (done) {
		var myFile = new studio.File(currentProjectBasePath + 'tests/loop.txt');
		var myText = studio.loadText(myFile);
		studio.currentEditor.insertText(myText);
		scroll (done);
	});
	
});

var pos = 0;
var count = 295;  // crash: 300;

function scroll (done) {
	if (count > 0) {
		studio.currentEditor.selectByLineIndex(0, 0, pos, pos + 35, true);
		pos += 81;
		count--;
		setTimeout(scroll, 45, done);
	} else {
		// studio.sendCommand('Save');
		// studio.sendCommand('CloseCurrentTab');
		done();	
	}	
}
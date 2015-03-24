function fillInput(input, value, callback) {
	input.focus();
	input.val(value);
	$('body').focus();
	setTimeout(callback, 1000);
}

describe("The GUI Designer", function () {
	
	beforeEach(function(done){
		setTimeout(done, 450);
	});
	
	it("adds a new Button", function (done) {
		var element = $('#waf_button_widgetButton-_-Button-button');	
		expect(element).to.have.length(1);
		expect($('#button5')).to.have.length(0);		
		element.simulate("drag", {
			dx: 350,
			dy: 10,
			moves: 1
		});		
		expect($('#button5')).to.have.length(1);
		setTimeout(done, 450);
	});

	it("sets the Button title to 'Foo'", function (done) {
		var element = $('#textInput-data-title');
		expect(element).to.have.length(1);		
		fillInput(element, 'Foo', function () {
			eventually(done, function () {
				var label = $('.btn-text', $('#button5'));
				expect(label).to.be.an("object");
				expect(label.length).to.be.above(0);
				expect($(label.get(label.length - 1)).text()).to.equal('Foo');
				$('a[href="#waf_tabEvents"]').simulate('click');
			});
		});		
	});
	
	it("selects the 'Event' tab", function (done) {
		var element = $('a[href="#waf_tabEvents"]');
		element.simulate('click');
		expect(element.parent().hasClass('selected')).to.be.true;
		setTimeout(done, 450);
	});
	
	it("opens the Code Editor on the 'On Click' event handler", function (done) {
		var element = $('label:contains("On Click")').parent().next().children('button');
		element.simulate('click');
		setTimeout(function () {
			eventually(done, function () {
				expect(studio).to.be.an("object");
				expect(studio.currentEditor).to.be.an("object");
				expect(studio.currentEditor.getSelectedText()).to.contain("// Add your code here");
			});
		}, 450);
	});
	
	it("defines the 'On Click' event handler", function (done) {
		var handlerCode = [];
		expect(studio).to.be.an("object");
		expect(studio.currentEditor).to.be.an("object");
		handlerCode.push('if (typeof window._mytest_callback === "function") {');
		handlerCode.push('\t\t\twindow._mytest_callback(this, event);');
		handlerCode.push('\t\t} else {');
		handlerCode.push('\t\t\talert("Hello world!");');
		handlerCode.push('\t\t}');
		studio.currentEditor.insertText(handlerCode.join('\n'));
		done();
	});
	
	it("saves the change and closes the Code Editor", function (done) {
		studio.sendCommand('SaveAll');
		studio.sendCommand('CloseCurrentTab');
		document.body.focus();
		done();
	});
	
	it("runs the Page", function () {
		studio.sendCommand('RunEditorFile');
	});

});
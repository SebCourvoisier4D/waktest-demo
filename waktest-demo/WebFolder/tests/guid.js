function fillInput(input, value, callback) {
	input.focus();
	input.val(value);
	$('body').focus();
	setTimeout(callback, 1000);
}

describe("The GUI Designer", function () {
	
	beforeEach(function(done){
		setTimeout(done, 350);
	});
	
	it("is expected to add a new Button", function () {
		var element = $('#waf_button_widgetButton-_-Button-button');	
		expect(element).to.have.length(1);
		expect($('#button5')).to.have.length(0);		
		element.simulate("drag", {
			dx: 350,
			dy: 10,
			moves: 1
		});		
		expect($('#button5')).to.have.length(1);
	});

	it("is expected to set its title to 'Foo'", function (done) {
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
	
	it("is expected to select the 'Event' tab", function () {
		var element = $('a[href="#waf_tabEvents"]');
		element.simulate('click');
		expect(element.parent().hasClass('selected')).to.be.true;	
	});

});
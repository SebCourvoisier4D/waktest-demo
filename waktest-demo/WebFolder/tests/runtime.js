function selectNextTabbable(){
	var selectables = $('#waf-body button[tabindex], #waf-body input[tabindex]');
	selectables.sort(function (a, b) {
		if ($(a).prop("tabIndex") < $(b).prop("tabIndex")) return -1;
		if ($(a).prop("tabIndex") > $(b).prop("tabIndex")) return 1;
		return 0;	
	});
	var current = $(':focus');
	var nextIndex = 0;
	if(current.length === 1){
		var currentIndex = selectables.index(current);
		if(currentIndex + 1 < selectables.length){
			nextIndex = currentIndex + 1;
		}
	}
	selectables.eq(nextIndex).focus();
	return $(':focus');
}

describe("The TabIndex Manager", function () {
	
	beforeEach(function(done){
		setTimeout(done, 450);
	});
	
	it("is expected to set the focus on the 'First' button first", function () {
		var focused = selectNextTabbable();
		expect(focused).to.be.an("object");
		expect(focused.prop("tabIndex")).to.equal(1);
		var label = $('.btn-text', focused);
		expect(label).to.be.an("object");
		expect(label.length).to.be.above(0);
		expect($(label.get(label.length - 1)).text()).to.equal('First');
	});
	
	it("is then expected to set the focus on the 'Second' button", function () {
		var focused = selectNextTabbable();
		expect(focused).to.be.an("object");
		expect(focused.prop("tabIndex")).to.equal(2);
		var label = $('.btn-text', focused);
		expect(label).to.be.an("object");
		expect(label.length).to.be.above(0);
		expect($(label.get(label.length - 1)).text()).to.equal('Second');
	});
	
	it("is then expected to set the focus on the 'Third' button", function () {
		var focused = selectNextTabbable();
		expect(focused).to.be.an("object");
		expect(focused.prop("tabIndex")).to.equal(3);
		var label = $('.btn-text', focused);
		expect(label).to.be.an("object");
		expect(label.length).to.be.above(0);
		expect($(label.get(label.length - 1)).text()).to.equal('Third');
	});
	
	it("is then expected to set the focus on the 'Fourth' button", function () {
		var focused = selectNextTabbable();
		expect(focused).to.be.an("object");
		expect(focused.prop("tabIndex")).to.equal(4);
		var label = $('.btn-text', focused);
		expect(label).to.be.an("object");
		expect(label.length).to.be.above(0);
		expect($(label.get(label.length - 1)).text()).to.equal('Fourth');
	});
	
	it("is finally expected to set the focus on the input field of the Custom Widget", function () {
		var focused = selectNextTabbable();
		expect(focused).to.be.an("object");
		expect(focused.prop("tabIndex")).to.equal(5);
		expect(focused.prop("id")).to.equal("fooid");
	});
	
});
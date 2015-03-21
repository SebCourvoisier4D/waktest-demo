describe("My application instance", function () {
	
	it("is not an administration application", function () {
		expect(application).to.have.a.property("administrator");
		expect(application.administrator).to.be.false;
	});
	
	it("is named 'waktest-demo'", function () {
		expect(application).to.have.a.property("name");
		expect(application.name).to.equal('waktest-demo');
	});
	
	it("has a bootstrap file named 'bootstrap.js'", function () {
		var myBootstrap = application.getItemsWithRole('bootStrap');
		myBootstrap.should.be.an("object");
		myBootstrap.should.have.a.property("name");
		myBootstrap.name.should.be.equal("bootstrap.js");
	});
	
	it("eventually does something asynchronously", function (done) {
		myAsyncFunction({
			onSuccess: function (myResult) {
				eventually(done, function () {
					// Put your assertions here...
					// Cf. http://chaijs.com/api/bdd/ for the full BDD API
				});
			},
			onError: function (myError) {
				done(myError); // Force the test case to fail
			}
		});
	});
	
});


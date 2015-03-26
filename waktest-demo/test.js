describe("My implementation", function () {
	
	/* In case you want your whole test suite to fail if one test case fails:
	this.bail(true);
	*/
	
	/* In case you want to slow down the execution:
	beforeEach(function(done){
		setTimeout(done, 250);  // Delay between each test case in millisecond
	});
	*/
	
	it("is expected to do something", function () {
		var foo = "bar";
		expect(foo).to.be.a("string");
		expect(foo).to.equal("bar");
		expect(foo).to.have.length(3);
		// Cf. http://chaijs.com/api/bdd/ for the full BDD API
	});
	it("should do something", function () {
		var foo = "bar";
		foo.should.be.a("string");
		foo.should.equal("bar");
		foo.should.have.length(3);
		// Cf. http://chaijs.com/api/bdd/ for the full BDD API
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

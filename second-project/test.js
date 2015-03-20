//var unitTest = require("waktest-module");
//unitTest.init();

describe("My second implementation", function () {
	
	/* In case you want to slow down the execution...
	beforeEach(function(done){
		setTimeout(done, 250);  // Delay between each test case in millisecond
	});
	*/
	
	it("is expected to do something", function () {
		var foo = "babar";
		expect(foo).to.be.a("string");
		expect(foo).to.equal("babar");
		expect(foo).to.have.length(5);
		// Cf. http://chaijs.com/api/bdd/ for the full BDD API
	});
	it("should do something", function () {
		var foo = "babar";
		foo.should.be.a("string");
		foo.should.equal("babar");
		foo.should.have.length(5);
		// Cf. http://chaijs.com/api/bdd/ for the full BDD API
	});
	it("eventually does something asynchronously", function (done) {
		myOtherAsyncFunction({
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

//unitTest.run();


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
	
	it("has a local 'tests' FileSystem...", function (done) {
		resolveLocalFileSystemURL('tests',
			function(myDir) {
				eventually(done, function () {
					expect(myDir).to.be.an("object");
					expect(myDir).to.have.a.property("isFile");
					expect(myDir).to.have.a.property("isDirectory");
					expect(myDir).to.have.a.property("name");
					expect(myDir.name).to.equal('tests');
				});
			},
			function(e) {
				done(e);
			}
		);
	});
	
	it("...that is a directory", function (done) {
		resolveLocalFileSystemURL('tests',
			function(myDir) {
				eventually(done, function () {
					expect(myDir.isFile).to.be.false;
					expect(myDir.isDirectory).to.be.true;					
				});
			},
			function(e) {
				done(e);
			}
		);
	});
	
});
describe("My application", function () {
	
	it("is not an 'administration application'", function () {
		expect(application).to.have.a.property("administrator");
		expect(application.administrator).to.be.false;
	});
	
	it("is named 'waktest-demo'", function () {
		expect(application).to.have.a.property("name");
		expect(application.name).to.equal('waktest-demo');
	});
	
	it("has a bootstrap file named 'bootstrap.js'", function () {
		var myBootstrap = application.getItemsWithRole('bootStrap');
		myBootstrap.should.be.an("object")
		.and.have.a.property("name");
		myBootstrap.name.should.be.equal("bootstrap.js");
	});
	
	it("has a local 'tests' FileSystem URL...", function (done) {
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
	
	it("has a DataStore", function () {
		ds.should.be.an("object");
	});
	
	it("has an empty 'Company' DataClass", function () {
		ds.Company.should.be.an("object").and.respondTo('query');
		expect(ds.Company.length).to.equal(0);
	});
	
	it("has an empty 'Employee' DataClass", function () {
		ds.Employee.should.be.an("object").and.respondTo('query');
		expect(ds.Employee.length).to.equal(0);
	});
	
	it("creates a Company...", function () {
		ds.Company.should.respondTo('createEntity');
		var myCompany = ds.Company.createEntity();
		myCompany.should.be.an("object").and.respondTo('save');
		myCompany.name = 'Wakanda';
		myCompany.save();
	});
	
	it("...and finds it", function () {
		ds.Company.should.respondTo('find');
		var myCompany = ds.Company.find('name=:1', 'Wakanda');
		myCompany.should.be.an("object").and.have.a.property('name');
		expect(myCompany.name).to.equal('Wakanda');
	});
	
	it("creates an Employee...", function () {
		ds.Employee.should.respondTo('createEntity');
		var myEmployee = ds.Employee.createEntity();
		myEmployee.should.be.an("object").and.respondTo('save');
		myEmployee.name = 'Bob';
		myEmployee.save();
	});
	
	it("...and finds it", function () {
		ds.Employee.should.respondTo('find');
		var myEmployee = ds.Employee.find('name=:1', 'Bob');
		myEmployee.should.be.an("object").and.have.a.property('name');
		expect(myEmployee.name).to.equal('Bob');
	});
	
	it("binds an Employee to a Company", function () {
		var myEmployee = ds.Employee.find('name=:1', 'Bob');
		var myCompany = ds.Company.find('name=:1', 'Wakanda');
		myEmployee.company = myCompany;
		myEmployee.save();		
		expect(myEmployee.company).to.have.a.property('name');
		expect(myEmployee.company.name).to.equal('Wakanda');
	});
	
});
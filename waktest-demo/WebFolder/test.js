describe("My implementation", function () {

  it("is expected to do something", function () {
    var foo = "bar";
    expect(foo).to.be.a("string");
    expect(foo).to.equal("bar");
    expect(foo).to.have.length(3);
  });

  it("should do something", function () {
    var foo = "bar";
    foo.should.be.a("string");
    foo.should.equal("bar");
    foo.should.have.length(3);
  });

});
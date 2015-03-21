WAF.define('TestTabIndex', ['waf-core/widget'], function(widget) {
	
    var TestTabIndex = widget.create('TestTabIndex', {
        init: function() {
        	if ($('div', this.node).length === 0) {
	        	this.node.innerHTML += '<div style="outline: 1px solid grey;">My Widget:<p><input type="text" name="fooname" id="fooid" class="fooclass"/></p></div>';
	        }
//            /* Define a custom event */
//            this.fire('myEvent', {
//                message: 'Hello'
//            });
			
        }
//        ,
        
//        /* Create a property */
//        test: widget.property({
//            onChange: function(newValue) {
//                this.node.innerHTML = this.test(); /* this contains the widget and newValue contains its current value */
//            }
//        })
    });

//    /* Map the custom event above to the DOM click event */
//    TestTabIndex.mapDomEvents({
//        'click': 'action'
//    });	
	
	//TestTabIndex.doAfter("init", function() {
	TestTabIndex.addTabIndex('.fooclass');
	//});
	
    return TestTabIndex;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3871.html */
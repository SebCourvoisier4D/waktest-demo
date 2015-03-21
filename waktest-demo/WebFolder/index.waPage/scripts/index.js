
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @Button
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		alert('click');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
// @endregion
};// @endlock

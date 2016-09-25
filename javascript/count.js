(function() {

	"use strict";

	var textItem = document.body.getElementsByTagName("text");
	var numItem = document.body.getElementsByTagName("num");

	countText();

	function countText() {
		var num = textItem.length;
		numItem.innerText = num;
	}

})();

(function() {

	"use strict";

	var textItem = document.getElementById("text");
	var numItem = document.getElementById("num");

	countText();

	textItem.addEventListener("keydown", countText);
	textItem.addEventListener("keyup", countText);

	function countText() {
		var num = textItem.value.length;
		numItem.innerHTML = num;
	}

})();

(function() {

	"use strict";

	var COUNT_MAX = 200;
	var COUNT_MIN = 180;

	var textItem = document.getElementById("text");
	var numItem = document.getElementById("num");

	countText();

	textItem.addEventListener("keydown", countText);
	textItem.addEventListener("keyup", countText);

	function countText() {
		var num = textItem.value.length;
		setNum(num);
	}

	function setNum(num) {
		numItem.innerHTML = num;
		numItem.className = checkNum(num) ? "good" : "";
		textItem.className = checkNum(num) ? "good" : "";
	}

	function checkNum(num) {
		return COUNT_MIN <= num && num <= COUNT_MAX;
	}

})();

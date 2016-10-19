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
		numItem.className = setClass(num);
		textItem.className = setClass(num);
	}

	function setClass(num) {
		var ret = (COUNT_MIN <= num && num <= COUNT_MAX) ? "good" : "";
		return ret;
	}

})();

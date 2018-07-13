(function () {

	"use strict";

	const COUNT_MAX = 145;
	const COUNT_MIN = 125;

	let textItem = document.getElementById("text");
	let numItem = document.getElementById("num");

	countText();

	textItem.addEventListener("keydown", countText);
	textItem.addEventListener("keyup", countText);

	function countLength(str) {
		let r = 0;
		for (let i = 0; i < str.length; i++) {
			let c = str.charCodeAt(i);
			// Shift_JIS: 0x0 ～ 0x80, 0xa0 , 0xa1 ～ 0xdf , 0xfd ～ 0xff
			// Unicode : 0x0 ～ 0x80, 0xf8f0, 0xff61 ～ 0xff9f, 0xf8f1 ～ 0xf8f3
			if ((c >= 0x0 && c < 0x81) || (c == 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) {
				r += 1;
			} else {
				r += 2;
			}
		}
		return r;
	}

	function countText() {
		let num = countLength(textItem.value);
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

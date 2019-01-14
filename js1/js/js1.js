function start() {
	//建立数组	
	var arr1 = new Array();
	for(i = 0; i < 9; i++) {
		arr1.push(i);
	}
	var arr2 = new Array();
	for(y = 0; y < 3; y++) {
		var x = Math.floor(Math.random() * arr1.length);
		arr2.push(arr1[x]);
		arr1.splice(x, 1);
	}
	end();
	//随机色
	for(a = 0; a < 3; a++) {
		function boxcolor() {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			var rgb = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
			return rgb;
		}
		document.getElementById("box" + arr2[a]).style.backgroundColor = boxcolor();
	}
}

function end() {
	for(b = 0; b < 9; b++) {
		document.getElementById("box" + b).style.backgroundColor = "#F4A460";
	}
}
var t;

function hEad() {
	clearInterval(t);
	t = setInterval(start, 500);
}

function fInish() {
	clearInterval(t);
	end();
}
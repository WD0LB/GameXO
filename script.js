//This work is by developer Walid Laanibi
let winner = "x_o";
let xo = false;
let btns = ["", "", "", "", "", "", "", "", ""];
let player = document.getElementById('Player');
let body = document.getElementById('body');
let btnClicked = 0;

function setDisabled(bt, numb) {
	let btn = document.getElementById(bt);
	if (winner === "x_o") {
		setXorO(btn, numb);	
		btn.setAttribute("disabled","");	
		checker(btns);
		btnClicked += 1;
	}
	win();
}

function setXorO(btn, numb) {
	if (xo) {
		helpSetXorO("x", false, btn, numb);
	} else {
		helpSetXorO("o", true, btn, numb);
	}
}

function helpSetXorO(XorO, bool, btn, numb) {
	btns[numb] = XorO;
	btn.innerHTML = XorO;
	playerEffect(XorO);
	xo = bool;
}

function playerEffect(XorO) {
	player.innerHTML = 'Player : ' + XorO;
	if (XorO === 'x') {
		body.style.background = '#ff5b5b61';
	} else if (XorO === 'o') {
		body.style.background = "#5bc4ff61";
	}
}

function checker(array) {
	let check;
	for (let i = 0 ; i < 9; i+=3) {
		check = array[i] + array[i + 1] + array[i + 2];
		whoWinner(check);
	}
	for (let i = 0 ; i < 3; i++) {
		check = array[i] + array[i + 3] + array[i + 6];
		whoWinner(check);
	}
	check = array[0] + array[4] + array[8];
	whoWinner(check);
	check = array[2] + array[4] + array[6];
	whoWinner(check);
}

function whoWinner(arg) {
	if (arg === "xxx") {
		isWin = true;
		return winner = "X";
	} else if (arg === "ooo") {
		isWin = true;
		return winner = "O";
	}
}

function win() {
	if (winner === "X") {
		player.innerHTML = "X Win replay click [W.L]";
	} else if (winner === "O") {
		player.innerHTML = "O Win replay click [W.L]";
	} else if (btnClicked === 9) {
		player.innerHTML = "No winner! replay click [W.L]";
	}
}

function reply() {
	for (let i = 0; i < 9; i++) {
	let btn = document.getElementById('bt'+i);
	btn.removeAttribute("disabled","");
	btn.innerHTML = "-";
	}
	btnClicked = 0;
	 winner = "x_o";
	 xo = false;
	 btns = ["", "", "", "", "", "", "", "", ""];
	 body.style.background = 'white';
	 player.innerHTML = "Play X O";
}

player.addEventListener("click", reply);
let check = 0
let allsqr = document.getElementsByClassName('ssqr')
let res = document.getElementById('result-box')
let isDraw = true
let isWon = false

document.getElementById('sqr').onclick = function(event) {
	if (!isWon) {
		if(event.target.innerHTML == '') {
			if (check%2 == 0) {
				event.target.innerHTML += 'O'
			} 
			else {
				event.target.innerHTML += 'X'
			}
			check++
			chekWinner()
		}
	}
}

function chekWinner() {
	const vert = [0, 1, 2,]
	const hor = [0, 3, 6]
	const diag = [0, 2]
	let count = 4

	for (let j,i in vert) {
		i = parseInt(i)
		if (allsqr[i].innerHTML == allsqr[i+3].innerHTML && allsqr[i].innerHTML == allsqr[i+6].innerHTML && allsqr[i].innerHTML != ''){
			if(allsqr[i].innerHTML == 'O') {
				res.innerHTML = '<img src="../icon/zero.png" height="70px"> Перемогли ' + allsqr[i].innerHTML + '!<img src="icon/zero.png" height="70px">';
			}
			else {
				res.innerHTML = '<img src="../icon/cross.png" height="70px"> Перемогли ' + allsqr[i].innerHTML + '!<img src="icon/cross.png" height="70px">'
			}
			isDraw = false
			isWon = true
		}
	}
	for (let j,i in hor) {
		i = parseInt(i)
		if (allsqr[i].innerHTML == allsqr[i+1].innerHTML && allsqr[i].innerHTML == allsqr[i+2].innerHTML && allsqr[i].innerHTML != ''){
			if(allsqr[i].innerHTML == 'O') {
				res.innerHTML = '<img src="../icon/zero.png" height="70px"> Перемогли ' + allsqr[i].innerHTML + '!<img src="icon/zero.png" height="70px">';
			}
			else {
				res.innerHTML = '<img src="../icon/cross.png" height="70px"> Перемогли ' + allsqr[i].innerHTML + '!<img src="icon/cross.png" height="70px">'
			}
			isDraw = false
			isWon = true
		}
	}
	for (let j,i in diag) {
		i = parseInt(i)
		if (allsqr[i].innerHTML == allsqr[i+count].innerHTML && allsqr[i].innerHTML == allsqr[i+(count*2)].innerHTML && allsqr[i].innerHTML != ''){
			if(allsqr[i].innerHTML == 'O') {
				res.innerHTML = '<img src="icon/zero.png" height="70px"> Перемогли ' + allsqr[i].innerHTML + '!<img src="icon/zero.png" height="70px">';
			}
			else {
				res.innerHTML = '<img src="icon/cross.png" height="70px"> Перемогли ' + allsqr[i].innerHTML + '!<img src="icon/cross.png" height="70px">'
			}
			isDraw = false
			isWon = true
		}
		count -= 2
	}
	draw()
}

document.querySelector('#clear').onclick = () => {
	for (let i = 0; i < 9; i++) {
		allsqr[i].innerHTML = ''
	}
	res.innerHTML = ''
	check = 0
	isDraw = true
	isWon = false
}

function draw() {
	if (check == 9) {
		if(isDraw) {
			res.innerHTML = '<img src="icon/draw.png" height="70px"> Нічия! <img src="icon/draw.png" height="70px">'
		}
	}
}

const logModal = document.querySelector('.log')
const signModal = document.querySelector('.sign')
const closeBlock = document.querySelector('.emp-block')


document.querySelector('.log-in').onclick = () => {
	document.querySelector('.log').style.visibility = 'visible'
	logModal.style.zIndex = '999'
}
document.querySelector('.sign-up').onclick = () => {
	document.querySelector('.sign').style.visibility = 'visible'
	signModal.style.zIndex = '999'
}

logModal.onclick = (event) => {
	if (event.target == document.querySelector('.log')) {
		document.querySelector('.log').style.visibility = 'hidden'
		logModal.style.zIndex = '-999'
	}
}

signModal.onclick = () => {
	if (event.target == document.querySelector('.sign')) {
		document.querySelector('.sign').style.visibility = 'hidden'
		signModal.style.zIndex = '-999'
	}
}
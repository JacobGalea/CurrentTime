let tik = true

function currentTime() {
	let date = new Date()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let seconds = date.getSeconds()
	let session = 'AM'

	if (hour == 0) {
		hour = 12
	}
	if (hour > 12) {
		hour = hour - 12
		session = 'PM'
	}

	hour = hour < 10 ? '0' + hour : hour
	minute = minute < 10 ? '0' + minute : minute
	seconds = seconds < 10 ? '0' + seconds : seconds

	let time = hour + ':' + minute + ':' + seconds + ' ' + session

	document.getElementById('clock').innerText = time
	setTimeout(function () {
		if (tik == true) {
			currentTime()
		}
	}, 1000)
}

function hourClock() {
	let date = new Date()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let seconds = date.getSeconds()

	hour = hour < 10 ? '0' + hour : hour
	minute = minute < 10 ? '0' + minute : minute
	seconds = seconds < 10 ? '0' + seconds : seconds

	let time = hour + ':' + minute + ':' + seconds

	document.getElementById('clock').innerText = time
	setTimeout(function () {
		if (tik == false) {
			hourClock()
		}
	}, 1000)
}

function tiktok() {
	if (tik === true) {
		hourClock()
		tik = false
	} else if (tik === false) {
		currentTime()
		tik = true
	}
}

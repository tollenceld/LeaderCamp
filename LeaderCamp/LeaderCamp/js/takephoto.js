Bmob.initialize("b92001779135a1f5", "123654");
new_element = document.createElement("script");
new_element.setAttribute("type", "text/javascript");
new_element.setAttribute("src", "index.js");
document.body.appendChild(new_element);

function TP1(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('UhQI777F').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata1(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月12日 12:00~12:30";
				// document.getElementById("C102").innerHTML = "已预约";
			} else {

			}
		} else {
			document.getElementById('B1').disabled = true;
			document.getElementById('B1').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP2(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('I5myDDDk').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata2(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月12日 12:30~13:00";
				// document.getElementById("C102").innerHTML = "已预约";
			} else {

			}
		} else {
			document.getElementById('B2').disabled = true;
			document.getElementById('B2').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP3(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('NMmK1117').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata3(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月12日 13:00~13:30";
				// document.getElementById("C102").innerHTML = "已预约";
			} else {

			}
		} else {
			document.getElementById('B3').disabled = true;
			document.getElementById('B3').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP4(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('oT45AAAb').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata4(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月12日 13:30~14:00";
				// document.getElementById("C102").innerHTML = "已预约";
			} else {

			}
		} else {
			document.getElementById('B4').disabled = true;
			document.getElementById('B4').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP5(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('16gNAAAF').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata5(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月12日 14:00~14:30";
				// document.getElementById("C102").innerHTML = "已预约";
			} else {

			}
		} else {
			document.getElementById('5').disabled = true;
			document.getElementById('5').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP6(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('RoCd0003').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata6(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月12日 14:30~15:00";
				// document.getElementById("C102").innerHTML = "已预约";
			} else {

			}
		} else {
			document.getElementById('B6').disabled = true;
			document.getElementById('B6').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP7(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('cQD2PPPQ').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata7(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月12日 15:00~15:30";
				// document.getElementById("C102").innerHTML = "已预约"
			} else {

			}
		} else {
			document.getElementById('B7').disabled = true;
			document.getElementById('B7').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP8(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('SbeQ888A').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata8(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月12日 15:30~16:00";
				// document.getElementById("C102").innerHTML = "已预约"
			} else {

			}
		} else {
			document.getElementById('B8').disabled = true;
			document.getElementById('B8').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP9(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('249Hgggo').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata9(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月13日 19:30~20:00";
				// document.getElementById("C100").innerHTML = "已预约"
			} else {

			}
		} else {
			document.getElementById('B9').disabled = true;
			document.getElementById('B9').innerHTML = '已满';
		}
	}).catch(err => {
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

function TP0(event) {
	var classQuery = Bmob.Query("Time");
	classQuery.get('kNWl999I').then(res => {
		var count = res.member
		if (count < 10) {
			if (confirm("是否确认,确认后无法更改")) {
				res.set('member', count + 1);
				res.save();
				updata0(event);
				document.getElementById('B1').disabled = true;
				document.getElementById('B2').disabled = true;
				document.getElementById('B3').disabled = true;
				document.getElementById('B4').disabled = true;
				document.getElementById('B5').disabled = true;
				document.getElementById('B6').disabled = true;
				document.getElementById('B7').disabled = true;
				document.getElementById('B8').disabled = true;
				document.getElementById('B9').disabled = true;
				document.getElementById('B0').disabled = true;
				document.getElementById("C100").innerHTML = "1月13日 20:00~20:30";
				// document.getElementById("C100").innerHTML = "已预约";
			} else {

			}
		} else {
			document.getElementById('B0').disabled = true;
			document.getElementById('B0').innerHTML = '已满';
		}
	}).catch(err => {
		console.log(err)
		alert('账号出现问题,请重新登陆');
		window.location.href = "index.html";
	})
}

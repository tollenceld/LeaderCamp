Bmob.initialize("b92001779135a1f5", "123654");
// var query = Bmob.Query("_User");
// query.find().then(res => {
// 	console.log(res)
// });
//current：缓存的登陆成功的用户对象。在第二个页面务必判断current是否为空，为空将跳转登陆页面重新登陆
current = Bmob.User.current()
// var data = {};
var arr = Object.keys(current);

OBID = undefined
var classname = undefined
if (arr.length == 0) {
	//如果为空,返回登陆页面,防止未登陆用户造成系统崩溃
	window.location.href = "index.html";
} else {
	switch (current.group) {
		case 1:
			document.getElementById("QRCode").src = "images/taller1.jpg";
			break;
		case 2:
			document.getElementById("QRCode").src = "images/taller2.jpg";
			break;
		case 3:
			document.getElementById("QRCode").src = "images/taller3.jpg";
			break;
		case 4:
			document.getElementById("QRCode").src = "images/taller4.jpg";
			break;
		case 5:
			document.getElementById("QRCode").src = "images/taller5.jpg";
			break;
		case 6:
			document.getElementById("QRCode").src = "images/taller6.jpg";
			break;
		case 7:
			document.getElementById("QRCode").src = "images/taller7.jpg";
			break;
		case 8:
			document.getElementById("QRCode").src = "images/taller8.jpg";
			break;
		case 9:
			document.getElementById("QRCode").src = "images/taller9.jpg";
			break;
		case 10:
			document.getElementById("QRCode").src = "images/taller10.jpg";
			break;
		default:
			break;
	}
	switch (current.takephoto) {
		case 1:
			document.getElementById("C100").innerHTML = "1月12日 12:00~12:30";

			break;
		case 2:
			document.getElementById("C100").innerHTML = "1月12日 12:30~13:00";

			break;
		case 3:
			document.getElementById("C100").innerHTML = "1月12日 13:00~13:30";

			break;
		case 4:
			document.getElementById("C100").innerHTML = "13:30~14:00";

			break;
		case 5:
			document.getElementById("C100").innerHTML = "1月12日 14:00~14:30";

			break;
		case 6:
			document.getElementById("C100").innerHTML = "1月12日 14:30~15:00";

			break;
		case 7:
			document.getElementById("C100").innerHTML = "1月12日 15:00~15:30";

			break;
		case 8:
			document.getElementById("C100").innerHTML = "1月12日 15:30~16:00";

			break;
		case 9:
			document.getElementById("C100").innerHTML = "1月13日 19:30~20:00";

			break;
		case 0:
			document.getElementById("C100").innerHTML = "1月13日 20:00~20:30";

			break;
		default:
			document.getElementById("C100").innerHTML = "未预约";

			break;
	}

	// 如果不为空,则将current内的值填入页面内

	document.getElementById("name").innerHTML = current.name;
	document.getElementById("roomNumber").innerHTML = current.roomNumber;
	document.getElementById("group").innerHTML = current.group;

	OBID = current.objectId
	if (current.takephoto != 10) {
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

	}

}

function updata1(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 1);
		res.save();
	}).catch(err => {})
}

function updata2(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 2);
		res.save();
	}).catch(err => {})
}

function updata3(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 3);
		res.save();
	}).catch(err => {})
}

function updata4(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 4);
		res.save();
	}).catch(err => {})
}

function updata5(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 5);
		res.save();
	}).catch(err => {})
}

function updata6(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 6);
		res.save();
	}).catch(err => {})
}

function updata7(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 7);
		res.save();
	}).catch(err => {})
}

function updata8(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 8);
		res.save();
	}).catch(err => {})
}

function updata9(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 9);
		res.save();
	}).catch(err => {})
}

function updata0(event) {
	var classQuery = Bmob.Query("_User");
	classQuery.get(OBID).then(res => {
		res.set('takephoto', 0);
		res.save();
	}).catch(err => {})
}

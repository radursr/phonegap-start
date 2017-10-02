
alert("JS is running");
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

	alert("onDeviceReady");

	var devicePlatform = device.manufacturer;
	
	
	document.getElementById("sometext").innerHTML = "some random text";
	
	console.log(navigator.vibrate(1000);
};

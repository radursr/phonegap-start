document.addEventListener('deviceready', this.onDeviceReady, false);
    
onDeviceReady: function() {

	

	var devicePlatform = device.manufacturer;
	
	document.getElementById("sometext").innerHTML = devicePlatform;
	
	console.log(navigator.vibrate(1000);
};

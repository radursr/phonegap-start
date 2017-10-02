document.addEventListener('deviceready', this.onDeviceReady, false);
    
onDeviceReady: function() {

	

	var devicePlatform = device.platform;
	
	document.getElementById("sometext").innerHTML = devicePlatform;
	
	
};

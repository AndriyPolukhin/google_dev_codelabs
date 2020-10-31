var identifyModule = (function IdentifyModule(id) {
	
	function change() {
		// modifying the public API
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log(id);
	}

	function identify2() {
		console.log(id.toUpperCase());
	}

	var publicAPI = {
		change: change,
		identify: identify1
	}

	return publicAPI;

})( 'identify module' );

identifyModule.identify();
identifyModule.change();
identifyModule.identify();

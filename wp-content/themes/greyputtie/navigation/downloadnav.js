$(document).ready(function(){
	 
$('#linuxdownloads div.newdownload a').hover(function() {
	        
		// Stuff that happens when you hover on + the stop()
		$('#linuxdownloads div.newdownload img.linuxarrow').stop().animate({
			'opacity': 1
			}, 700,'easeOutSine')
	
	},function() {
	
		// Stuff that happens when you unhover + the stop()
		$('#linuxdownloads div.newdownload img.linuxarrow').stop().animate({
			'opacity': 0
			}, 700, 'easeOutQuad')
	
	})

$('#appledownloads div.newdownload a').hover(function() {
	        
		// Stuff that happens when you hover on + the stop()
		$('#appledownloads div.newdownload img.applearrow').stop().animate({
			'opacity': 1
			}, 700,'easeOutSine')
	
	},function() {
	
		// Stuff that happens when you unhover + the stop()
		$('#appledownloads div.newdownload img.applearrow').stop().animate({
			'opacity': 0
			}, 700, 'easeOutQuad')
	
	})

$('#windowsdownloads div.newdownload a').hover(function() {
	        
		// Stuff that happens when you hover on + the stop()
		$('#windowsdownloads div.newdownload img.windowsarrow').stop().animate({
			'opacity': 1
			}, 700,'easeOutSine')
	
	},function() {
	
		// Stuff that happens when you unhover + the stop()
		$('#windowsdownloads div.newdownload img.windowsarrow').stop().animate({
			'opacity': 0
			}, 700, 'easeOutQuad')
	
	})

});
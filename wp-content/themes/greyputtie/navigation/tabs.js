// JavaScript Document
/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!
/***************************/

$(document).ready(function(){
	$(".featurelinks > li").click(function(e){
		switch(e.target.id){
			case "onemouse":
				//change status &amp;amp;amp; style menu
				$("#onemouse").addClass("active");
				$("#simple").removeClass("active");
				$("#clipboard").removeClass("active");
				$("#multi").removeClass("active");
				
				//display selected division, hide others
				$("div.onemouse").css("display", "block");
				$("div.onemouse").css("opacity", "0");
				$("div.onemouse").stop().animate({
			'opacity': 1
			}, 700,'easeOutSine');
				
				$("#onemousetext").css("display", "block");
				$("#onemousetext").css("height", "0px");
				$("#onemousetext").stop().animate({
			height: '200px'
			}, 700,'easeOutSine');	
				
				$("div.simple").css("display", "none");
				$("#simpletext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
				$("div.clipboard").css("display", "none");
				$("#clipboardtext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
				$("div.multi").css("display", "none");
				$("#multitext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
			break;
			case "simple":
				//change status &amp;amp;amp; style menu
				$("#onemouse").removeClass("active");
				$("#simple").addClass("active");
				$("#clipboard").removeClass("active");
				$("#multi").removeClass("active");
				
				//display selected division, hide others
				$("div.simple").css("display", "block");
				$("div.simple").css("opacity", "0");
				$("div.simple").stop().animate({
			'opacity': 1
			}, 700,'easeOutSine');
				
				$("#simpletext").css("display", "block");
				$("#simpletext").css("height", "0px");
				$("#simpletext").stop().animate({
			height: '200px'
			}, 700,'easeOutSine');	
				
				$("div.onemouse").css("display", "none");
				$("#onemousetext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
				$("div.clipboard").css("display", "none");
				$("#clipboardtext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
				$("div.multi").css("display", "none");
				$("#multitext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
			break;
			case "clipboard":
				//change status &amp;amp;amp; style menu
				$("#onemouse").removeClass("active");
				$("#simple").removeClass("active");
				$("#clipboard").addClass("active");
				$("#multi").removeClass("active");
				
				//display selected division, hide others
				$("div.clipboard").css("display", "block");
				$("div.clipboard").css("opacity", "0");
				$("div.clipboard").stop().animate({
			'opacity': 1
			}, 700,'easeOutSine');
				
				$("#clipboardtext").css("display", "block");
				$("#clipboardtext").css("height", "0px");
				$("#clipboardtext").stop().animate({
			height: '150px'
			}, 700,'easeOutSine');	
				
				$("div.onemouse").css("display", "none");
				$("#onemousetext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
				$("div.simple").css("display", "none");
				$("#simpletext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
				$("div.multi").css("display", "none");
				$("#multitext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
			break;
			case "multi":
				//change status &amp;amp;amp; style menu
				$("#onemouse").removeClass("active");
				$("#simple").removeClass("active");
				$("#clipboard").removeClass("active");
				$("#multi").addClass("active");
				
				//display selected division, hide others
				$("div.multi").css("display", "block");
				$("div.multi").css("opacity", "0");
				$("div.multi").stop().animate({
			'opacity': 1
			}, 700,'easeOutSine');
				
				$("#multitext").css("display", "block");
				$("#multitext").css("height", "0px");
				$("#multitext").stop().animate({
			height: '200px'
			}, 700,'easeOutSine');	
				
				$("div.onemouse").css("display", "none");
				$("#onemousetext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
				$("div.simple").css("display", "none");
				$("#simpletext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
				$("div.clipboard").css("display", "none");
				$("#clipboardtext").stop().animate({
			height: '0px'
			}, 700,'easeOutSine');
				
			break;
		}
		//alert(e.target.id);
		return false;
	});
});

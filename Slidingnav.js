/**
 * @author		    luominting - luominting.com
 */
var Slidingnav;
(function(){
 	'use strict';
 	Slidingnav = function(options){
 		var options = options || {};
 		options.id = options.id;
 		if(!options.id){
 			console.error('Uncaught TypeError: Missing ID attribute');
 			return;
 		}
 		options.speed = options.speed || 0.75;
 		options.time = options.time || 30;
	 	var oUl = document.getElementById(options.id);
		var aLi = oUl.children;
		var oBox = oUl.children[aLi.length-1];

		for(var i = 0; i < aLi.length-1; i++){
			aLi[i].onmouseover = function(){
				startMove(oBox,this.offsetLeft)
			};
			aLi[i].onmouseout = function(){
				startMove(oBox,0)
			};
		}

		var timer = null;
		var speed = 0;
		var left = 0;
		function startMove(obj,iTarget){	
			clearInterval(timer);	
			timer = setInterval(function(){
				speed+= (iTarget-obj.offsetLeft)/5;
				speed*=options.speed;

				left+=speed;
				obj.style.left = Math.round(left) + 'px';
				if(Math.round(speed) == 0 && Math.round(left) ==iTarget){
					clearInterval(timer);
				}
			},options.time);	
		}
	} 
 })();
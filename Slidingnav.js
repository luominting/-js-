/**
 * @author		    luominting - luominting.com
 */
var Slidingnav;
(function(){
 	'use strict';
 	Slidingnav = function(id){
	 	var oUl = document.getElementById(id);
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
				speed*=0.75;

				left+=speed;
				obj.style.left = Math.round(left) + 'px';
				if(Math.round(speed) == 0 && Math.round(left) ==iTarget){
					clearInterval(timer);
				}
			},30);	
		}
	} 
 })();
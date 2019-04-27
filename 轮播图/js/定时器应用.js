function move(obj,attr,target,speed,callback){
	clearInterval(obj.timer);
	var current = parseInt(getstyle(obj,attr));
	if(current > target )
	{
		speed = -speed;
	}
	obj.timer = setInterval(function(){
		var oldValue = parseInt(getstyle(obj,attr));
		var newValue = oldValue + speed;
		if( (speed < 0 && newValue < target) || (speed > 0 && newValue > target))
		{
			newValue = target;
		}
		obj.style[attr] = newValue + "px";
		if(newValue == target)
		{
			clearInterval(obj.timer);
			callback && callback();
		}
	},30)						
}
//可以执行简单动画的函数
function getstyle(obj,name){
	if(window.getComputedStyle)
	{
		return getComputedStyle(obj,null)[name];
	} else
	{
		return obj.currentStyle[name];
	}
}
//获取某个元素的某个属性

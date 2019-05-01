/*参数：
obj ： 要执行的那个的对象
attr:要执行动画的样式， 比如：left top width height
target:要执行动画的目标位置
speed: 速度（整数向右移动，负数向左移动）
callback:  回掉函数  在动画执行完毕时执行
*/

 function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer)
    // 开启定时器

    //让程序自动判断左右
    //如果从0向800移动，则speed为正
    //如果从800向0移动，则speed为负
    var curre=parseInt(getStyle(obj,attr));
    if(curre>target){
      speed = -speed;
    };
       /* 但是这个有个缺陷就是这样诗两个box绑在一个定时器上，由于有个clearInterval(timer)
       所以在开启box1时再打开box2 那么box1会被关闭，clearInterval(timer)会关闭上一个定时器，这个的作用是为了
       防止一直点击按钮而导致无法关闭定时器，解决方案那么可以给每个box绑定自己的定时器，而OBJ就是我们要执行的
       对象，所以可以这样 obj.timer =setInterval,现在只能关闭自己的*/
           //timer =setInterval
       obj.timer =setInterval(function(){

       //获取原来的left值 这里使用parseTnt 进行取数字 比如10px 取10
      var oldValue=parseInt(getStyle(obj,attr));
       
      //旧值基础上增加
       var newValue= oldValue+speed;
       //判断newValue 是否大于800
       // 从800向0移动
       //向左移动时，需要判断newValue是否小于target
       //向右移动时，需要判断newValue是否大于target
       //target 就是给设定只能行走的路程 newvalue 是实际行走的距离
       if((speed<0&&newValue < target)||(speed>0&&newValue>target)){
           newValue=target;
       };
      //将新值给box1 要是变量的话加中括号
       obj.style[attr]=newValue+"px";
       // 当元素移动到0px时，使停止动画
       if(newValue==target){

           //达到目标停止定时器
           clearInterval(obj.timer);
            //但是这么写有个遐思，当我别的不写回掉函数时么会报错，但是我不想它报错，可以这样这
           //callback();
           callback&&callback();
       }
    },30);
  }
/*  
  定义一个函数，来获取指定元素的指定样式
   参数：
    obj 以获取样式的元素
     name 要获取的样式名*/
function getStyle(obj,name){
 return getComputedStyle(obj,null)[name];
}
/*
cn:  要添加class的值
*/
function addClass(obj,cn){

  //判断obj中是否含有cn， 有不管 没有就加
  if(!hasClass(obj,cn)){
     obj.className +=" "+cn;
  }
}
// 判断一个元素中是否制定的class属性值
// 如果有返回true  没有返回false
function hasClass(obj,cn){
   
    // 判断obj 中有没有cn class
    //创建一个正则表达式 \b  是字符边界
   // var reg =/\bb2\b/;
    var reg= new RegExp ("\\b"+cn+"\\b");
    return reg.test(obj.className);

}
/*
 删除一个class属性
*/
 function removeClass(obj,cn){
   //创建一个正则表达式
   var reg= new RegExp ("\\b"+cn+"\\b");
   //删除class  replace() 替换方法
   obj.className=obj.className.replace(reg,cn);
 }
 // toggleClass  可以用来切换一个类
 /*
     如果元素中有该类  则删除
       没有 则增加
 */
 function toggleClass(obj,cn){
   if(hasClass(obj,cn)){
     removeClass(obj,cn);
   }else{
     addClass(obj,cn);
   }
 }
window.onload=function(){
    /**
     * 每个菜单都是一个div
     * 当 div有 collapsed 就是折叠，没有就是展开  
     */
     /*点击菜单切换菜单显示状态*/
     //获取所有class为menuSpan
     var menuSpan =document.querySelectorAll(".menuSpan");
    // alert(menuSpan.length);
    //为每个span绑定单机响应函数
    for(var i=0;i<menuSpan.length;i++){
        menuSpan[i].onclick=function(){

            //this代表我当前点击的span
            //获取span父元素
            var parentDiv=this.parentNode;

            //在切换之前获取元素高度
            //var begin=parentDiv.offsetHeight;
           // alert(begin);

            //关闭parent的class
            toggleClass(parentDiv,"collapsed");
            //判断 openDiv 和 parentDiv 是否相同
          /*  if(openDiv!=parentDiv){
                //打开菜单以后，应该关闭之前打开的菜单
                addClass(openDiv,"collapsed");
            }
            //修改openDiv 为当前打开的菜单
            openDiv = parentDiv;*/
        };
    }
  
};

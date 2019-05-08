//设计哈希函数
//1.将字符串转成比较大的数字：hashCode
//2.将hashCode压缩到数组范围之内
function hashFunc(str,size) {
	// body...
	//定义hashCode变量
	var hashCode = 0;
	//霍纳算法，计算hashCode的值
	//str.charCodeAt() 获取字符串的Unicode编码
	for (var i = 0; i < str.length; i++) {
		hashCode = 37 * hashCode + str.charCodeAt(i);
	}
	//取余操作
	var index = hashCode % size;
	return index;
}

//封装哈希表的类
function HashTable() {
	// body...
	//属性
	this.storage = [];
	this.count = 0;
	// count/size 用于计算装填因子loadFactor,
	// loadFactor<0.25时,数组需要缩小
	// loadFactor>0.75时,数组需要扩容
	this.limit = 7;
	//方法
}
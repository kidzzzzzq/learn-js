//封装哈希表的类
function HashTable() {
	// body...
	//属性
	//用于存放元素的数组
	this.storage = [];
	//用于计算数组中已经存放了多少元素,
	this.count = 0;
	//count/size 用于计算装填因子loadFactor,
	//loadFactor<0.25时,数组需要缩小
	//loadFactor>0.75时,数组需要扩容
	
	//记录数组的长度
	this.limit = 11;

	//方法

	//1.设计哈希函数
	//将字符串转成比较大的数字：hashCode
	//将hashCode压缩到数组范围之内
	HashTable.prototype.hashFunc = function (str,size) {
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

	//2.插入、修改操作
	//当key不存在时，为插入操作
	//当key存在时，为修改操作
	HashTable.prototype.put = function (key,value) {
		// body...
		//通过key获取index
		var index = this.hashFunc(key,this.limit);

		//根据index取出storage中的bucket
		var bucket = this.storage[index];

		//判断bucket是否为空
		//为空则为插入操作
		if (bucket == null) {
			bucket = [];
			this.storage[index] = bucket;
		}
		//不为空判断bucket中key是否存在
		//存在为修改操作，不存在为插入操作
		for (var i = 0; i < bucket.length; i++) {
			var tuple = bucket[i];
			if (tuple[0] == key) {
				//修改操作
				tuple[1] = value;
				return;
			}
		}
		//插入操作
		bucket.push([key,value]);

		this.count++;
	}
	//获取操作
	HashTable.prototype.get = function (key) {
		// body...
		//通过key获取index
		var index = this.hashFunc(key,this.limit);
		//根据index取出storage中的bucket
		var bucket = this.storage[index];
		//判断bucket是否为空
		if (bucket == null) {
			return null;
		}
		//判断bucket中是否有key
		for (var i = 0; i < bucket.length; i++) {
			var tuple = backet[i];
			//如果有key
			if (tuple[0] == key) {
				return tuple[1];
			}
		}
		//如果没有key
		return null;
	}
	//删除操作
	HashTable.prototype.remove = function (key) {
		// body...
		//根据key获取index
		var index = this.hashFunc(key,this.limit);
		//根据index得到storage中的bucket
		var bucket = this.storage[index];
		//判断bucket是否为空
		if (bucket == null) {
			return null;
		}
		//判断bucket中是否有key
		for (var i = 0; i < bucket.length; i++) {
			var tuple = bucket[i];
			if (tuple[0] == key) {
				bucket.splice(i,1);
				this.count--;
				return tuple[1];
			}
		}
		//没有key
		return null;
	}
}






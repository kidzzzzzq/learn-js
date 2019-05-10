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
		//判断是否需要扩容
		if (this.count / this.limit > 0.75) {
			var newSize = this.limit * 2;
			var newPrime = this.getPrime(newSize);
			this.resize(newPrime);
		}
	}
	//3.获取操作
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
			var tuple = bucket[i];
			//如果有key
			if (tuple[0] == key) {
				return tuple[1];
			}
		}
		//如果没有key
		return null;
	}
	//4.删除操作
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
			//缩小容量
			if (this.limit>7 && this.count/this.limit<0.25) {
				var newSize = Math.floor(this.limit/2)
				var newPrime = this.getPrime(newSize);
				this.resize(newPrime);
			}
		}
		//没有key
		return null;
	}
	//5.判断哈希表是否为空
	HashTable.prototype.isEmpty = function () {
		// body...
		return this.count == 0;
	}
	//6.获取哈希表中元素的个数
	HashTable.prototype.size = function () {
		// body...
		return this.count; 
	}
	//7.哈希表扩容
	HashTable.prototype.resize = function (newLimit) {
		// body...
		//保存旧的数组内容
		var oldStorage = this.storage;
		//重置所有属性
		this.storage = [];
		this.limit = newLimit;
		this.count = 0;
		//遍历oldStorage中所有bucket
		for (var i = 0; i < oldStorage.length; i++) {
			//取出对应的bucket
			var bucket = oldStorage[i];
			//bucket若为空，则执行下一次循环
			if (bucket == null) {
				continue;
			}
			//bucket若不为空，则取出其中的每组数据放入新表中
			for (var j = 0; j < bucket.length; j++) {
				var tuple = bucket.[j];
				this.put(tuple[0],tuple[1]);
			}
		}
	}
	//判断某个数字是否是质数
	HashTable.prototype.isPrime = function (num) {
		// body...
		var temp = parseInt(Math.sqrt(num));
		for (var i = 0; i < temp; i++) {
			if (num % i == 0) {
				return false;
			}
		}
		return true;
	}
	//获取质数的方法
	HashTable.prototype.getPrime = function (num) {
		// body...
		while(!this.isPrime(num)){
			num++;
		}
		return num;
	}
}

// 哈希表
// 创建哈希表
// var hashTable = new HashTable();
// 1.用哈希函数得出元素存放在数组中的位置
// (此时元素还未添加，数组为空)
// console.log(hashTable.hashFunc('小黑',11)); //10
// console.log(hashTable.hashFunc('苍牙',11)); //6
// console.log(hashTable.hashFunc('琳',11));   //3
// console.log(hashTable.hashFunc('小椒',11)); //1
// console.log(hashTable.hashFunc('阿力',11)); //0
// console.log(hashTable.hashFunc('隼白',11)); //6
// console.log(hashTable.hashFunc('阴阳师',11)); //8
// console.log(hashTable.hashFunc('雷神',11)); //0
// console.log(hashTable.hashFunc('老板娘',11)); //3
// 2.添加操作
// hashTable.put('小黑',18); 
// hashTable.put('苍牙',21);
// hashTable.put('琳',20);
// hashTable.put('小椒',17);
// hashTable.put('阿力',22);
// hashTable.put('隼白',23);
// hashTable.put('阴阳师',30);
// hashTable.put('雷神',50);
// hashTable.put('老板娘',24);
// 3.获取操作
// console.log(hashTable.get('隼白'));
// 4.修改操作
// hashTable.put('隼白',25);
// console.log(hashTable.get('隼白'));
// 5.删除操作
// hashTable.remove('隼白');
// console.log(hashTable.get('隼白'));		
// console.log(hashTable);




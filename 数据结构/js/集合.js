//封装集合的构造函数
function Set() {
	// body...
	//属性
	this.items = {};
	//方法
	//1.向集合添加一个元素
	Set.prototype.add = function (value) {
		// body...
		//判断当前集合是否已经包含了该元素
		if (this.has(value)) {
			return false;
		}
		this.items[value] = value;
		return true;
	}
	//2.检查集合中是否有对应元素
	Set.prototype.has = function (value) {
		// body...
		return this.items.hasOwnProperty(value);
	}
	//3.删除某个元素
	Set.prototype.remove = function (value) {
		// body...
		//判断该集合中是否包含该元素
		if (!this.has(value)) {
			return false;
		}
		delete this.items[value];
		return true;
	}
	//4.清空集合
	Set.prototype.clear = function () {
		// body...
		this.items = {};
	}
	//5.返回集合中元素的个数
	Set.prototype.size = function () {
		// body...
		return Object.keys(this.items).length;
	}
	//6.获取集合中所有的值
	Set.prototype.values = function () {
		// body...
		return Object.keys(this.items);
	}
	//7.集合间的操作：并集
	Set.prototype.union = function (otherSet) {
		// this:集合A, otherSet:集合B
		// 创建一个新的集合
		var unionSet = new Set();
		// 将A中所有的元素添加到新集合中
		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}
		//取出B中的元素判断是否需要加到新集合中
		var otherValues = otherSet.values();
		for (var i = 0; i < otherValues.length; i++) {
			//add方法会自动判断集合是否包含该元素
			unionSet.add(otherValues[i]);
		}
		return unionSet;
	}
	//8.交集
	Set.prototype.intersection = function (otherSet) {
		// body...
		var intersectionSet = new Set();
		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			var items = values[i];
			if (otherSet.has(items)) {
				intersectionSet.add(items);
			}
		}
		return intersectionSet;
	}
	//9.差集(Set - otherSet)
	Set.prototype.difference = function (otherSet) {
		// body...
		var differenceSet = new Set();
		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			var items = values[i];
			if (!otherSet.has(items)) {
				differenceSet.add(items);
			}
		}
		return differenceSet;
	}
	//10.子集(set是否是otherSet的子集)
	Set.prototype.subset = function (otherSet) {
		// body...
		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			var items = values[i];
			if (!otherSet.has(items)) {
				return false;
			}
		}
		return true;
	}
}

// 测试Set类
// 创建Set类对象
// var set = new Set();
// 测试add方法
// set.add('小黑');
// set.add('苍牙');
// set.add('琳');
// set.add('小椒');
// set.add('阿力');
// console.log(set);
// 测试remove方法
// console.log(set.remove('小椒'));
// 测试clear方法
// console.log(set.clear());
// console.log(set);
// 测试values方法
// console.log(set.values());
// 并集操作
// var otherSet = new Set();
// otherSet.add('老板娘');
// otherSet.add('苍牙');
// otherSet.add('琳');
// otherSet.add('小椒');
// otherSet.add('阴阳师');
// unionSet = set.union(otherSet);
// console.log(unionSet.values());
// 交集操作
// intersectionSet = set.intersection(otherSet);
// console.log(intersectionSet.values());
// 差集操作(set - otherSet)
// differenceSet = set.difference(otherSet);
// console.log(differenceSet.values());
// 子集(set是否是otherSet的子集)
// console.log(set.subset(otherSet));
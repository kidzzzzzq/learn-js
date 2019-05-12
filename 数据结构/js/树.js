//创建BST
function BinarySearchTree() {
	// body...
	//创建节点构造函数
	function Node(key,value) {
		// body...
		this.key = key;
		this.value = value;
		this.left = null;
		this.right = null;
	}
	//保存根的属性
	this.root = null;	
	//二叉搜索树相关的操作方法
	//1.插入操作
	BinarySearchTree.prototype.insert = function (key,value) {
		// body...
		//1.根据key创建要插入的节点
		var newNode = new Node(key,value);
		//2.判断根节点是否有值
		if (this.root == null) {
			//根节点为空
			this.root = newNode;
		} else {
			//根节点不为空
			this.insertNode(this.root,newNode);
		}
	}
	//插入递归函数
	BinarySearchTree.prototype.insertNode = function (node,newNode) {
		// body...
		//向左查找
		if (newNode.key < node.key) {
			//原来的节点左子节点为空时
			if (node.left == null) {			
				node.left = newNode;
			} else {
				//左子节点不为空时
				this.insertNode(node.left,newNode);
			}
		} else {
		//向右查找
			//原来的节点的右子节点为空时
			if (node.right == null) {
				node.right = newNode;
			} else {
				//右子节点不为空时
				this.insertNode(node.right,newNode);
			}
		}
	}

	//2.先序遍历
	BinarySearchTree.prototype.preOrderTraversal = function (handle) {
		// body...
		this.preOrderTraversalNode(this.root,handle);
	}
	//先序遍历递归函数
	BinarySearchTree.prototype.preOrderTraversalNode = function (node,handle) {
		// body...
		if (node != null) {
			//处理经过的节点
			handle(node.key,node.value);
			//处理经过节点的左子节点
			this.preOrderTraversalNode(node.left,handle);
			//处理经过节点的右子节点 
			this.preOrderTraversalNode(node.right,handle);
		}
	}

	//3.中序遍历
	BinarySearchTree.prototype.inOrderTraversal = function (handle) {
		// body...
		this.inOrderTraversalNode(this.root,handle);
	}
	//中序遍历递归函数
	BinarySearchTree.prototype.inOrderTraversalNode = function (node,handle) {
		// body...
		if (node != null) {
			//处理经过的左子节点
			this.inOrderTraversalNode(node.left,handle);
			//处理经过的节点
			handle(node.key,node.value);
			//处理经过的右子节点
			this.inOrderTraversalNode(node.right,handle);
		}
	}

	//4.后序遍历
	BinarySearchTree.prototype.postOrderTraversal = function (handle) {
		// body...
		this.postOrderTraversalNode(this.root,handle);
	}
	// 后序遍历递归函数
	BinarySearchTree.prototype.postOrderTraversalNode = function (node,handle) {
		// body...
		if (node != null) {
			// 处理经过的左子节点
			this.postOrderTraversalNode(node.left,handle);
			// 处理经过的右子节点
			this.postOrderTraversalNode(node.right,handle);
			// 处理经过的节点
			handle(node.key,node.value);
		}
	}

	//5.获取最小值
	BinarySearchTree.prototype.min = function () {
		// body...
		// 获取根节点
		var node = this.root;
		while (node.left != null) {
			node = node.left;
		}
		return node.key + ':' + node.value;
	}
	//6.获取最大值
	BinarySearchTree.prototype.max = function () {
		// body...
		// 获取根节点
		var node = this.root;
		// 向右不断查找
		while (node.right != null) {
			node = node.right;
		}
		return node.key + ':' + node.value;
	}
	//7.搜索某个特定的值(递归实现)
	BinarySearchTree.prototype.search = function (key) {
		// body...
		return this.searchNode(this.root,key);
	}
	//递归函数
	BinarySearchTree.prototype.searchNode = function (node,key) {
		// body...
		//判断当前比较的节点是否为空
		if (node == null) {
			return false;
		}
		//判断节点的key与传入的key的大小
		if (node.key > key) {
			//向左开始查找
			return this.searchNode(node.left,key);
		} else if (node.key < key) {
			//向右开始查找
			return this.searchNode(node.right,key);
		} else {
			//node.key = key, 查找到了
			return node.value;
		}
	}
}

// 树的使用
// 创建树
// var bst = new BinarySearchTree();
// 插入方法
// bst.insert(18,'小黑');
// bst.insert(21,'苍牙');
// bst.insert(20,'琳');
// bst.insert(17,'小椒');
// bst.insert(23,'隼白');
// bst.insert(22,'阿力');
// bst.insert(15,'阴阳师');
// bst.insert(19,'雷神');
// bst.insert(16,'老板娘');
// console.log(bst);
// 先序遍历
// var resultString = '';
// bst.preOrderTraversal(function (key,value) {
// 	// body...
// 	resultString += key + ':' + value + ',';
// });
// console.log(resultString);
// 中序遍历
// var resultString = '';
// bst.inOrderTraversal(function (key,value) {
// 	// body...
// 	resultString += key + ':' + value + ',';
// });
// console.log(resultString);
// 后序遍历
// var resultString = '';
// bst.postOrderTraversal(function (key,value) {
// 	// body...
// 	resultString += key + ':' + value + ',';
// });
// console.log(resultString);

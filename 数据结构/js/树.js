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

	// //7.搜索某个特定的值(递归实现)
	// BinarySearchTree.prototype.search = function (key) {
	// 	// body...
	// 	return this.searchNode(this.root,key);
	// }
	// //递归函数
	// BinarySearchTree.prototype.searchNode = function (node,key) {
	// 	// body...
	// 	//判断当前比较的节点是否为空
	// 	if (node == null) {
	// 		return false;
	// 	}
	// 	//判断节点的key与传入的key的大小
	// 	if (node.key > key) {
	// 		//向左开始查找
	// 		return this.searchNode(node.left,key);
	// 	} else if (node.key < key) {
	// 		//向右开始查找
	// 		return this.searchNode(node.right,key);
	// 	} else {
	// 		//node.key = key, 查找到了
	// 		return node.value;
	// 	}
	// }

	//7.搜索某个特定的值(循环实现)
	BinarySearchTree.prototype.search = function (key) {
		// body...
		//获取根节点
		var node = this.root;
		//循环搜索key
		//直到节点为空时,终止循环
		while(node != null){
			if (node.key > key) {
				node = node.left;
			} else if (node.key < key) {
				node = node.right;
			} else {
				return node.value;
			}
		}
		return false;
	}

	//8.二叉搜索树的删除
	BinarySearchTree.prototype.remove = function (key) {
		// body...
		//寻找我们要删除的节点
		var current = this.root;
		//记录要删除节点的父节点
		var parent = null;
		//要删除的节点是否为左子节点
		var isLeftChild = true;
		//开始寻找要删除的节点
		while (current.key != key){
			parent = current;
			if (current.key > key) {
				isLeftChild = true;
				current = current.left;
			} else {
				isLeftChild = false;
				current = current.right;
			}
		}
		//特殊情况,树里面没有对应的key
		if (current == null) {
			return false;
		}
		//根据对应情况删除节点
		//删除的节点是叶子节点
		if (current.left == null && current.right == null) {
			//要删除的节点是根节点
			if (current == this.root) {
				this.root = null;
			} else if (isLeftChild) {
			//要删除的节点是左子节点
				parent.left = null;
			} else {
			//要删除的节点是右子节点
				parent.right = null;
			}
		} 
		//要删除的节点只有一个左子节点
		else if (current.right == null) {
			//节点本身为根节点
			if (current == this.root) {
				this.root = current.left;
			} else if (isLeftChild) {
				//节点本身为左子节点
				parent.left = current.left;
			} else {
				//节点本身为右子节点
				parent.right = current.left;
			}
		} 
		//要删除的节点只有一个右子节点
		else if (current.left == null) {
			//节点本身为根节点
			if (current == this.root) {
				this.root = current.right;
			} else if (isLeftChild) {
				//节点本身为左子节点
				parent.left = current.right;
			} else {
				//节点本身为右子节点
				parent.right = current.right;
			}
		}
		//删除的节点有两个子节点
		else {
			//找后继(右子树的最小值)
			var succssor = this.getSuccssor(current);
			//节点本身为根节点
			if (current == this.root) {
				this.root = succssor;
			}
			//节点不为空节点
			//将后继的左子树变为 


		}
	}
	//找后继方法
	BinarySearchTree.prototype.getSuccssor = function (delNode) {
		// body...
		//保存找到的后继
		var succssor = delNode;
		var current = delNode.right;
		//循环查找
		while(current != null){
			succssor = current;
			//找右子树的最小值,需要往左找
			current = current.left;
		}
		return succssor; 
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
// 获取最小值
// console.log(bst.min());	
// 获取最大值
// console.log(bst.max());	
// 搜索特定的值
// console.log(bst.search(16)); 

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 7, 67, 6345, 324];

function node(value) {
	return {
		value: value,
		left: null,
		right: null,
	};
}

function tree() {
	return {
		root: null,
		insert(value) {
			const newNode = node(value);
			if (this.root === null) {
				this.root = newNode;
			}
			if (this.root !== null) {
				this.insertNode(this.root, newNode);
			}
		},
		insertNode(root, node) {
			if (node.value < root.value) {
				if (root.left === null) {
					root.left = node;
				} else {
					this.insertNode(root.left, node);
				}
			}
			if (node.value > root.value) {
				if (root.right === null) {
					root.right = node;
				} else {
					this.insertNode(root.right, node);
				}
			}
			return root.value;
		},
	};
}

const removeDuplicates = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			arr.splice(i + 1, 1);
			i--;
		}
		if (arr[i + 1] === null) return;
	}
	return arr;
};

const getMiddleElement = (arr) => {
	return arr[parseInt(arr.length / 2)];
};

const divideArray = (arr) => {
	const leftArr = [];
	const rightArr = [];
	for (let i = 0; i < parseInt(arr.length / 2); i++) {
		leftArr.push(arr[i]);
	}
	for (let j = parseInt(arr.length / 2 + 1); j < arr.length; j++) {
		rightArr.push(arr[j]);
	}
	return { leftArr, rightArr };
};

function buildTree(arr) {
	if (arr.length <= 0) return;
	if (arr.length === 1) {
		newTree.insert(arr[0]);
		return;
	}
	// get middle of sortedArr
	// and insert that value into newTree
	newTree.insert(getMiddleElement(arr));
	// split the array into leftArr and rightArr and re-run buildTree()
	const leftArr = divideArray(arr).leftArr;
	buildTree(leftArr);
	const rightArr = divideArray(arr).rightArr;
	buildTree(rightArr);
	return newTree.root;
}

const newTree = tree();
const sortedArr = removeDuplicates(array.sort((a, b) => a - b));
// buildTree(sortedArr);
console.log(buildTree(sortedArr));

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 7, 67, 6345, 324];

function Node(value) {
	return { value: value, leftChild: null, rightChild: null };
}

function Tree() {
	return {
		root: null,

		insert(value) {
			const newNode = Node(value);

			if (this.root === null) {
				this.root = newNode;
			} else {
				insertNode(this.root, newNode);
			}
		},
	};

	function insertNode(node, newNode) {
		console.log("passed node :", node);
		console.log("new node: ", newNode);
		if (newNode.value < node.value) {
			if (node.leftChild === null) {
				node.leftChild = newNode;
				console.log(node);
			} else {
				// console.log(node);
				node.leftChild = insert(newNode.value);
				console.log(node);
			}
			// console.log("Added node: ", node);
		}
	}
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

const buildTree = (arr) => {
	const newTree = Tree();
	newTree.insert(getMiddleElement(arr));
	console.log(newTree.root);
	let leftArr = divideArray(arr).leftArr;
	newTree.insert(getMiddleElement(leftArr));
	leftArr = divideArray(leftArr).leftArr;
	newTree.insert(getMiddleElement(leftArr));
	console.log(newTree.root);
	// while (leftArr.length >= 1) {
	// let middleValue = getMiddleElement(leftArr);
	// leftArr = divideArray(leftArr).leftArr;
	// newTree.insert(middleValue);
	// } else {
	// 	newTree.insert(leftArr);
	// }
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

// const newTree = Tree();
// console.log(newTree);
// newTree.insert();
// newTree.insert(buildTree(array));
// console.log(newTree);
array.sort((a, b) => a - b);
const sortedArr = buildTree(removeDuplicates(array));
// buildTree(sortedArray);

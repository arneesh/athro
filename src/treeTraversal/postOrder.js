// left right root
   export const postOrder = (root) => {
    if(root === null || root === undefined) return root;
    var visited = [];
    var current = root;

    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(current);
  return visited;
  }

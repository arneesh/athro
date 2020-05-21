// left root right
  export const inOrder = (root) => {
    if(root === null || root === undefined) return root;
    var visited = [];
    var current = root;

    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(current);
  return visited;
  }

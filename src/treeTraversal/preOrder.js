// root left right
export const preOrder = (root) =>{
  if(root === null || root === undefined) return root;
  var visited = [];
  var current = root;

  function traverse(node){
    visited.push(node.value);
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
  }
  traverse(current);
return visited;
}

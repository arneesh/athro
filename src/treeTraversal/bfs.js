export const bfs = (root) => {
  if(root === null || root === undefined) return root;
  var visited = [];
  var queue = [];
  var node;
  queue.push(root);

  while(queue.length > 0){
    node = queue.shift();
    visited.push(node.value);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return visited;
}

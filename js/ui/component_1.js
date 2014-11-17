//TOP LEFT
function component_one(){
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');

  bitmap.width = 256;
  bitmap.height = 256;

  g.font = 'Bold 20px Arial';
  g.fillStyle = 'white';
  g.fillText = ('text' , 0 , 20);
  g.strokeStyle = 'white';
  g.strokeText('text', 0 , 20);

  var texture = new THREE.Texture(bitmap);
  texture.needsUpdate = true;

  var geometry = new THREE.CubeGeometry(5,5,5,5);
  var material = new THREE.MeshBasicMaterial({color: 0xffffff});
  var mesh = new THREE.Mesh( geometry, material);

  scene.add(mesh);
}
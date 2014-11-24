//TOP LEFT

var c1_material,
    c1_texture,
    c1_canvas,
    c1_ctx,
    c1_mesh,
    c1_string,
    c1_sprite;

function component_one(){
  c1_canvas = document.createElement('canvas');
  c1_ctx = c1_canvas.getContext('2d');

  c1_string = 'Kevin asd'
  c1_ctx.height = 1000;
  c1_ctx.width = 500;

  c1_ctx.font = '75px Helvetica';
  c1_ctx.fillStyle = 'black';
  c1_ctx.fillText(c1_string, 0 , 50);
  c1_ctx.stroke();

  // c1_background = new Image();
  // c1_background.src = "texture_1.png";

  // c1_background.onload = function(){
  //   c1_ctx.drawImage(c1_background,0,0);
  // }​

  c1_texture = new THREE.Texture(c1_canvas);
  c1_texture.wrapS = THREE.RepeatWrapping;
  c1_texture.wrapT = THREE.RepeatWrapping;
  c1_texture.repeat.set( 1, 1 );
  c1_texture.needsUpdate = true;

  //var map = THREE.ImageUtils.loadTexture( "sprite.png" );
  // c1_material = new THREE.MeshBasicMaterial( { map: map, color: 0xffffff, fog: true } );
  // c1_sprite = new THREE.Sprite({ map: c1_texture, transparent: true, useScreenCoordinates: true });
  // c1_sprite.position.set(0,0,0);
  // scene.add( c1_sprite );
  // return c1_sprite;


  c1_geometry = new THREE.PlaneGeometry(2,1,2,2);
  c1_material = new THREE.MeshBasicMaterial({ map : c1_texture });
  c1_material.needsUpdate = true;

  c1_mesh = new THREE.Mesh( c1_geometry, c1_material);
  c1_mesh.material.side = THREE.DoubleSide;

  scene.add(c1_mesh);
  return c1_mesh;
}
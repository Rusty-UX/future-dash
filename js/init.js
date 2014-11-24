var scene,
    fov = 65,
    camera,
    controls,
    renderer,
    wwidth = window.innerWidth,
    wheight = window.innerHeight;

function init(){
  container = document.getElementById( "container" );
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( fov, wwidth / wheight , 1, 10000);
  camera.position.z = 5;
  camera.target = new THREE.Vector3(0,0,0);

  scene.add(camera);

  component_one();

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize( wwidth, wheight );
  renderer.setClearColor( 0xefefef, 1);

  controls = new THREE.OrbitControls( camera );
  controls.addEventListener( 'change', render );

  container.appendChild(renderer.domElement);

  render();

}

function render(){
  renderer.render(scene, camera);
  /*c1_mesh.rotation.y += 0.01;*/
  requestAnimationFrame(render);
}
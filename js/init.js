var scene,
    fov = 75,
    camera,
    renderer,
    wwidth = window.innerWidth,
    wheight = window.innerHeight;

function init(){
  container = document.getElementById( "container" );

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( fov, wwidth / wheight, 1, 10000);
  camera.position.z = 50;
  camera.target = new THREE.Vector3(0,0,0);

  scene.add(camera);

  component_one();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(wwidth, wheight);
  container.appendChild(renderer.domElement);

  render();

}

function render(){
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
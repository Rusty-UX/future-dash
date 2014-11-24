            var camera, scene, renderer;
            var mesh, geometry, material;
            var light, sign, animTex;
            var canvas, context;

            init();
            animate();

            function init() {

                camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1200 );
                camera.position.z = 700;

                scene = new THREE.Scene();

                material = new THREE.MeshLambertMaterial(
                    { color: 0x885522
                    , wireframe: false
                     , overdraw: false
                    } );
                geometry = new THREE.CubeGeometry( 80, 120, 100, 1,1,1);
                mesh = new THREE.Mesh( geometry, material );

                sign = createSign();

                light = new THREE.DirectionalLight(0xFFFFFF, 3.0);
                light.position = new THREE.Vector3(5,10,7);
                light.target = new THREE.Vector3(0,0,0);

                scene.add( mesh );
                scene.add( sign );
                scene.add( light );

                renderer = new THREE.CanvasRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                document.body.appendChild( renderer.domElement );

            }
            function createSign() {
                canvas = document.createElement("canvas");
                context = canvas.getContext("2d");
                canvas.width = 200;
                canvas.height = 200;
                context = canvas.getContext("2d");
                var texture = new THREE.Texture(canvas);
                texture.needsUpdate = true;
                
                var material = new THREE.MeshBasicMaterial({ map : texture, overdraw: true });
                material.needsUpdate = true;
                var mesh = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), material);
                mesh.doubleSided = true;
                return mesh;
            }

            function animate() {

                var time = Date.now()*0.01;
                var sinTime = Math.sin ( time * 0.05 ) * 100;
                var cosTime = Math.cos ( time * 0.05 ) * 100;

                mesh.rotation.y = sinTime*0.01;

                requestAnimationFrame( animate );
                context.fillStyle="black";
                context.fillRect(0,0,canvas.width,canvas.height);
                context.fillStyle="white";
                context.fillRect ( (canvas.width/2) + sinTime, (canvas.height/2) + cosTime, 20, 20 );
                sign.material.map.needsUpdate = true;
                renderer.render( scene, camera );
            }

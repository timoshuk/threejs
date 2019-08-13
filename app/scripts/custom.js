document.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementById("myscene"),
    width = 600,
    height = 600;

  let renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });

  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  renderer.setSize(width, height);
  renderer.setClearColor(0x999999);

  let scene = new THREE.Scene();
  let group = new THREE.Group();

  scene.add(group);

  let camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
  camera.position.set(0, 0.3);

  renderer.render(scene, camera);
});

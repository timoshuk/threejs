"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("myscene"),
      width = 600,
      height = 600;
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  renderer.setSize(width, height);
  renderer.setClearColor(0x999999);
  var scene = new THREE.Scene();
  var group = new THREE.Group();
  scene.add(group);
  var camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
  camera.position.set(0, 0.3);
  renderer.render(scene, camera);
});
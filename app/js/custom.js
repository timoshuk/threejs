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
  scene.add(group); // Line Init

  var material = new THREE.LineBasicMaterial({
    color: 0xff0000
  });
  var geometry = new THREE.Geometry();
  var line = new THREE.Line(geometry, material);
  var vector1 = new THREE.Vector3(-100, 0, 0);
  var vector2 = new THREE.Vector3(100, 0, 0);
  geometry.vertices.push(vector1);
  geometry.vertices.push(vector2);
  line.rotation.z = Math.random() * Math.PI;
  group.add(line);
  var camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
  camera.position.set(0, 0, 300);
  renderer.render(scene, camera);
});
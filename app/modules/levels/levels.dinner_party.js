import * as THREE from 'three';

const ScreenScene = {
  initialize() {
    this.screenScene = new THREE.Scene();
    this.screenCamera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -10000,
      10000
    );
    this.screenCamera.position.z = 1000;
    this.screenScene.add(this.screenCamera);

    this.screenGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
    this.firstRenderTarget = new THREE.WebGLRenderTarget(512, 512, { format: THREE.RGBFormat });
    this.screenMaterial = new THREE.MeshBasicMaterial({ map: this.firstRenderTarget });
    this.quad = new THREE.Mesh(this.screenGeometry, this.screenMaterial);
    this.screenScene.add(this.quad);

    this.planeGeometry = new THREE.CubeGeometry(200, 100, 1, 1);
    this.finalRenderTarget = new THREE.WebGLRenderTarget(512, 512, { format: THREE.RGBFormat });
    this.planeMaterial = new THREE.MeshBasicMaterial({ map: this.finalRenderTarget });
    this.plane1 = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
    this.plane1.position.set(0, 100, 500);
  }
};

ScreenScene.initialize();

export default ScreenScene;

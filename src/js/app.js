import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { store } from './store/state.js';
import { Util } from './utils/util.js';
import { RAF } from './utils/RAF.js';
import { Box } from './parts/box.js';
import { FullScreen } from './parts/fullScreen.js';

class Main {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height;

        this.init();
    }

    init() {
        this.setupTHREE();
        this.setupScene();
        this.setupCamera();
        this.setupControl();

        this.setupObjects();

        this.render();
    }

    setupTHREE() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('app').appendChild(this.renderer.domElement);
        store.renderer = this.renderer;
    }

    setupScene() {
        this.scene = new THREE.Scene();
        store.scene = this.scene;
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.01, 100);
        this.camera.position.z = 2;

        store.camera = this.camera;
    }

    setupControl() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    setupObjects() {
        if(store.shaderart) {
            new FullScreen();
        } else {
            new Box();
        }
    }

    render(time) {
        requestAnimationFrame(this.render.bind(this));

        if(!store.shaderart) this.renderer.render(this.scene, this.camera);
        RAF.instance.update(time);
    }
}

new Main();

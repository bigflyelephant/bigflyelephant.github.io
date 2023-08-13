import { useEffect, useRef } from "react"
import {
	BlinnPhongMaterial,
	Camera,
	Engine,
	GLTFResource,
	MeshRenderer,
	PrimitiveMesh,
	Script,
	Vector3,
	WebCanvas,
	WebGLEngine,
    WebGLRenderer,
} from "@galacean/engine";
import { OrbitControl } from "@galacean/engine-toolkit-controls";

class Rotate extends Script {
    private _tempVector = new Vector3(0, 1, 0);
    onUpdate() {
      this.entity.transform.rotate(this._tempVector);
    }
  }

export function createRuntime(canvas:HTMLCanvasElement) {
    const engine = new WebGLEngine(canvas);

	engine.canvas.resizeByClientSize();
	const scene = engine.sceneManager.activeScene;
	const rootEntity = scene.createRootEntity();

	// init camera
	const cameraEntity = rootEntity.createChild("camera");
	cameraEntity.addComponent(Camera);
	const pos = cameraEntity.transform.position;
    cameraEntity.transform.setPosition(3, 3, 3);
    cameraEntity.addComponent(OrbitControl);
	cameraEntity.transform.lookAt(new Vector3(0, 0, 0));

	// init light
	scene.ambientLight.diffuseSolidColor.set(1, 1, 1, 1);
	scene.ambientLight.diffuseIntensity = 1.2;

	// init cube
	const cubeEntity = rootEntity.createChild("cube");
	const renderer = cubeEntity.addComponent(MeshRenderer);
	const mtl = new BlinnPhongMaterial(engine);
	const color = mtl.baseColor;
	color.r = 0.0;
	color.g = 0.8;
	color.b = 0.5;
	color.a = 1.0;
	renderer.mesh = PrimitiveMesh.createCuboid(engine);
	renderer.setMaterial(mtl);

    engine.resourceManager
    .load<GLTFResource>(
      "https://gw.alipayobjects.com/os/OasisHub/267000040/9994/%25E5%25BD%2592%25E6%25A1%25A3.gltf"
    )
    .then((gltf) => {
      const duck = gltf.defaultSceneRoot;

      rootEntity.addChild(duck);
      duck.addComponent(Rotate);
    });

	engine.run();
}

export default function BasicGame() {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        if(ref.current){
            createRuntime(ref.current);
        }
    },[ref.current]);

    return <canvas ref={ref} style={{ width: "100vw", height: "100vh" }}></canvas>
}
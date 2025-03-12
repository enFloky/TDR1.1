import { useEffect, useRef } from "react";
import "aframe";

const ARPage = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        if (sceneRef.current) return;
        sceneRef.current = true;

        // Comprova si la càmera s'està carregant correctament
        setTimeout(() => {
            const arScene = document.querySelector("a-scene");
            if (arScene) {
                arScene.setAttribute("arjs", "sourceType: webcam;");
            }
        }, 1000);
    }, []);

    return (
        <div>
            <a-scene embedded arjs="sourceType: webcam;">
                <a-marker preset="hiro">
                    <a-box position="0 0.5 0" material="color: red;"></a-box>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
};

export default ARPage;

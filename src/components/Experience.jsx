import { OrbitControls, ScrollControls, Scroll, Text, CameraControls } from "@react-three/drei";
import { Polaroid } from "./three/Polaroid.jsx";
import { Dotted } from "./three/Dotted.jsx";
import { Circle } from "./three/Circle.jsx";
import { Name } from "./three/Name.jsx";
import NameHover from "./Gsap/NameHover.jsx";
import Introduction from "./Introduction.jsx";
import Project from "./Projects.jsx";
import { Rocketship } from "./three/Rocketship.jsx";
import { useEffect, useRef, useState } from "react";

export const Experience = () => {
  const controls = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  const intro = async() => {
    controls.current.dolly(-7);
    controls.current.dolly(7, true);
  };
  const diagonal = 212;
  useEffect(() => {
    intro();
  }, []);

  const handleScroll = (e) => {
    const scrollOffset = e.target.scrollTop / window.innerHeight;
    setScrollPosition(scrollOffset);
  };

  useEffect(() => {
    if (controls.current) {
      controls.current.setPosition(scrollPosition * 10, 0, 5); // Adjust the multiplier to control the movement speed
    }
  }, [scrollPosition]);

  return (
    <>
      <ScrollControls pages={2} damping={0.1} onScroll={handleScroll} >
        <Scroll>
          <CameraControls ref={controls} enabled={false}/>
          <Polaroid />
          <Rocketship />
          <>
            <Circle position={[60, 3, -8]} r={55} />
            <Circle
              position={[-85 + diagonal, -232 + diagonal, -206]}
              r={202}
              rotationSpeed={0.5}
              rotation={[Math.PI / 2, 2.8, 0]}
            />
          </>
          <Dotted position={[0, 3, -4]} />
          <Dotted position={[-80, 0, -6]} />
          <Dotted position={[100, 0, -6]} />
          <Name />
        </Scroll>

        <Scroll html>
          <NameHover />
          <div className="space-y-64">
            <Introduction />
            <div className="glass">
              <Project />
            </div>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
};

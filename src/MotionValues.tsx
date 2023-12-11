import styled from "styled-components";
import { delay, motion, useMotionValue, useTransform, useScroll } from "framer-motion"
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg,#e09,#d0e);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;



function MotionValues() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(x, [-800, 0, 800] ,[
    "linear-gradient(135deg,rgb(0,210,238),rgb(0,83,238))",
    "linear-gradient(135deg,#e09,#d0e)",
    "linear-gradient(135deg,rgb(0,238,155),rgb(238,178,0))"
]);
const {scrollYProgress} = useScroll();
const scaleY = useTransform(scrollYProgress, [0,1],[1, 5]);
  
  return (
    <Wrapper style={{background:gradient}}>
        <Box style={{x, rotateZ, scale : scaleY}} drag="x" dragSnapToOrigin/>
          
      
    </Wrapper>
  );
}

export default MotionValues;
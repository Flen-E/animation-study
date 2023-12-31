import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants ={
    start : {
        opacity : 0,
        scale : 0,
    },
    visible : {
        opacity : 1,
        scale : 1,
        rotateZ : 360,
    },
    end : {
        opacity : 0,
        scale : 0,
        y : 50,
    },
}

function AnimPresence() {
    const [showing, setShowing] = useState(false);
    const toggleShowing= ()=>{
        setShowing((prev) => !prev);
        console.log(showing);

    }
  return (
    <Wrapper>
        <button onClick={toggleShowing}>Click</button>
        <AnimatePresence>{showing ? <Box variants = {boxVariants} initial="start" animate ="visible" exit="end" /> : null}</AnimatePresence>
      
    </Wrapper>
  );
}

export default AnimPresence;

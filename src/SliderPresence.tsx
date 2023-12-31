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
  top : 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size :30px;
  color: black;
  font-weight : bold;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants ={
    entry : (back:boolean) => ({
        x: back ? -500 : 500,
        opacity : 0,
        scale : 0,
    }),
    center : {
        x : 0,
        opacity: 1,
        scale: 1,
        transition :{
            duration : 0.3,
        }
    },
    exit : (back:boolean) =>({
        x: back ? 500 : -500,
        opacity : 0,
        scale : 0,
        transition : {
            duration : 0.3,
        }
    })
};

function SliderPresence() {
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const nextPlease = () => {setBack(false); setVisible(prev => prev === 10 ? 1 : prev +1 )};
    const prevPlease = () => {setBack(true); setVisible(prev => prev === 1 ? 10 : prev -1)};

  
  return (
    <Wrapper>
       <AnimatePresence mode= "wait" custom={back}>
        {[1,2,3,4,5,6,7,8,9,10].map(i => ( i === visible ? <Box custom={back} variants={boxVariants} initial="entry" animate = "center" exit= "exit" key ={visible}>{visible}</Box> : null))}
       </AnimatePresence>
       <button onClick={prevPlease}>prev</button>
       <button onClick={nextPlease}>next</button>
      
    </Wrapper>
  );
}

export default SliderPresence;

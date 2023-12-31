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
  height: 400px;
  margin: 50px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function ChangerAnim() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>

      <Box>    
          {!clicked ? (
            <Circle  layoutId = "circle" style={{ borderRadius: 50,  }}/>
          ) : null}
      </Box>
      <Box>
          {!clicked ? null : (
            <Circle  layoutId = "circle" style={{ borderRadius: 0,}}/>
          )}
      </Box>
    </Wrapper>
  );
}

export default ChangerAnim;

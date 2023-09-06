import {styled, keyframes} from 'styled-components'
import {motion} from 'framer-motion'


const slideFromRightToLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Section = styled.section`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  animation: ${slideFromRightToLeft } 1s ease-in-out;
`;
const MotionSobreMi =styled(motion.h1)`
color: red;
    font-size: 2.5rem;
    margin-left: 25px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
`
const MotionText = styled(motion.p)`
font-size: 24px;
    margin-right: 40px;
    margin-left: 40px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    position: relative;

    @media (min-width: 540px) {
      margin-right: 40%;
    
  }
   
`


export default {
    Section,
    MotionSobreMi,
    MotionText,
   
}
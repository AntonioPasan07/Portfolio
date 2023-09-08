import { styled, keyframes } from 'styled-components';
import {motion}from 'framer-motion'

import { ImMail4,ImLinkedin } from "react-icons/im";
import {FaGithub,FaWhatsapp} from "react-icons/fa"


const TextAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    margin-top: -27px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const MotionText = styled(motion.h2)`
  padding-top: 35px;
  font-size: 3rem;
  margin-top: -20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  color: white;
  opacity: 0;
  animation: ${TextAnimation} , ${fadeInAnimation} 2s ease-in-out forwards;
  transition: margin-top 0.5s ease-in-out;
`;

const MotionTexth3 = styled(motion.h3)`
  font-size: 2rem;
  color: #00ffff;
  margin-left: 30px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${TextAnimation} 4s steps(40, end) 1s forwards, ${fadeInAnimation} 1s ease-in-out forwards;
  transition: margin-top 0.5s ease-in-out;
  text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);

  @media (min-width: 540px) {
   font-size : 2.5rem;
  }
`

const ContainerAnimation = styled.div`
  display: flex;
  align-items: baseline;
`

const MotionIntro = styled(motion.p)`
  margin-top: 20px;
  color: white;
  font-size: 20px;
  margin-left: 35px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (min-width: 540px) {
   font-size :30px;
  }
`

const TextContainer = styled.div`
  margin-left: 40px;
  margin-right: 45px;
`


const slideInFromTop = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const MotionFoto = styled(motion.img)`
  //border-radius: 50%;
  margin-top: 15px;
//  border: 7px solid cadetblue;
  width: 400px;
 // box-shadow: 0 0 80px rgba(0, 0, 0, 0.9);
  animation: ${slideInFromTop} 2s ease-in-out forwards, ${fadeInAnimation} 1s ease-in-out forwards;

  @media (max-width: 540px) {
    margin-top: 20px;
    width: 250px;
  }
`

const Container = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0 50px;
  min-height: 50vh;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
const Contact = styled(FaWhatsapp)`
color: white;
font-size: 20px;
padding-right: 12px;
transition: all 0.2s ease-in-out;


&:hover {
  color: #00ffff;
  height: 35px; 
    width: 35px;
  }
`
const Email = styled(ImMail4)`
color: white;
font-size: 20px;
padding-right: 12px;
transition: all 0.2s ease-in-out;


&:hover {
  color: #00ffff;
  height: 35px; 
    width: 35px;
  }

`
const Github = styled(FaGithub)`
color: white;
font-size: 20px;
padding-right: 12px;
transition: all 0.2s ease-in-out;

&:hover {
  color: #00ffff;
  height: 35px; 
    width: 35px;
  }

`
const LinkedIn = styled(ImLinkedin)`
color: white;
font-size: 20px;
transition: all 0.2s ease-in-out;


&:hover {
  color: #00ffff;
  height: 35px; 
    width: 35px;
  }

`
const PhoneNumber = styled.span`
  
  color: #6b81e3;
  font-size: 16px;
  margin-left: 15px;

  &:hover {
  color: #00ffff
  }
  
`
const MotionDivContact = styled(motion.div)`
  margin-left: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;

`
const DecorationA = styled.a`
  text-decoration: none;
`

export default {
  MotionText,
  MotionIntro,
  MotionTexth3,
  ContainerAnimation,
  TextContainer,
  MotionFoto,
  Container,
  Contact,
  ContactContainer,
  PhoneNumber,
  Email,
  Github,
  LinkedIn,
  MotionDivContact,
  DecorationA,
};

import Styled from "./styles";
import React from 'react';
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../../utils/FadeIn";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (<Styled.Section id="About">
    <Styled.MotionSobreMi ref={ref} >Sobre Mi:</Styled.MotionSobreMi >
    <Styled.MotionText variants={fadeIn('right', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.4 }}>Soy un apasionado Desarrollador Digital con experiencia en gestión empresarial anteriores. Mi transición hacia el desarrollo web ha impulsado un emocionante crecimiento en mi carrera. Destaco por mis habilidades en trabajo en equipo, resolución de problemas y comunicación efectiva, siempre en búsqueda de oportunidades para aprender y mejorar.</Styled.MotionText>
  </Styled.Section>
  )
}

export default About
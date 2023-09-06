import Styled from './styles'
import { useState } from 'react'
const Studies = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (<>
    <Styled.BookContainer id="estudios">
      <Styled.Book isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Styled.BookInnerFront >
          <Styled.Title>Estudios:</Styled.Title>
          <Styled.SubTitle>Certificado Académico (The Bridge)</Styled.SubTitle>
          <Styled.Texto1>"Bootcamp" (Madrid The Bridge)</Styled.Texto1>
          <Styled.Parrafo >
            <Styled.Strong>320</Styled.Strong> horas de entrenamiento práctico
            en desarrollo web <Styled.Strong> Full Stack</Styled.Strong>. Front-end
            <Styled.Strong> HTML5, CSS3, JavaScript(ES6)</Styled.Strong>. Uso de
            flameworks libreria y herramientas de desarrollo
            <Styled.Strong> React(orientado a objetos)</Styled.Strong>, Design
            Systems, React funcional/React hook/ React testing(jest) y
            Despliegue. Desarrollo Backend e trabajado con
            <Styled.Strong> Node.js , Express, Adminer,PostgresSQL</Styled.Strong>
            para la creación de <Styled.Strong> API REST</Styled.Strong> SQL ,
            Pruebas unitarias (jest) Cloud y DevOps Arquitectura
            <Styled.Strong> CaaS, PaaS, SaaS</Styled.Strong> utilizando
            contenedores<Styled.Strong> Docker</Styled.Strong>, Kubernetes cadena
            DevOps y Jenkins.
          </Styled.Parrafo>
          <Styled.Click>Click</Styled.Click>
        </Styled.BookInnerFront>
        <Styled.BookInnerBack >
          <Styled.Title>Hard Skills:</Styled.Title>
          <Styled.Parrafo>
            Control de versiones: Git, GitHub. Metodologías de desarrollo como Scrum. Pruebas y aseguramiento de la calidad: Jest, Jasmine. Gestión de bases de datos: PostgreSQL, MySQL. Frameworks y bibliotecas adicionales: Vue.js. Manejo de estado: Context API. Diseño responsivo. Animaciones: CSS Transitions, CSS Styled Components y un poco de Framer motion. Autenticación y autorización: JWT. Patrones de diseño: MVC. Virtualización y contenedores: Docker, Kubernetes. Arquitectura de microservicios: REST API. Seguridad web: CORS, HTTPS.
          </Styled.Parrafo>
          <Styled.AnimatedIconsContainer>
            <p>
              <Styled.IconNode />
              Node.js/</p>
            <p>
              <Styled.IconJavaScript />
              JavaScript/ </p>
            <p>
              <Styled.IconHtml />
              HTML/ </p>
            <p>
              <Styled.IconCss />
              CSS3/</p>
            <p>
              <Styled.IconReact />
              React/</p>
            <p>
              <Styled.IconPosgre />
              PostgreSQL/</p>
            <p>
              <Styled.IconAdminer />
              Adminer/ </p>
            <p>
              <Styled.IconDocker />
              Docker.</p>
          </Styled.AnimatedIconsContainer>
          <Styled.Click>Click</Styled.Click>
        </Styled.BookInnerBack>
      </Styled.Book>
    </Styled.BookContainer>

  </>
  );
}
export default Studies
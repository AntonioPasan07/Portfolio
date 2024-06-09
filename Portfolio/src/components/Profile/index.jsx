import Styled from './styles'
import { fadeIn } from '../../utils/FadeIn'


const Profile = () => {
  const PHONENUMBER = import.meta.env.VITE_PHONE_NUMBER;
  const EMAIL = import.meta.env.VITE_EMAIL;

  return (<section>
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.MotionText variants={fadeIn('down', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}>Antonio Pasán Martínez</Styled.MotionText>

        <Styled.MotionTexth3 variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5 }}>Full Stack Developer</Styled.MotionTexth3>

        <Styled.MotionIntro variants={fadeIn('down', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}>Node.Js, Express, JavaScript, React, Angular, TypeScript, JQuery, PosgreSQL</Styled.MotionIntro>

        <Styled.MotionDivContact variants={fadeIn('right', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}>
          <Styled.ContactContainer>
            <Styled.DecorationA href={`tel:${PHONENUMBER}`}>
              <Styled.Contact />
            </Styled.DecorationA>
          </Styled.ContactContainer>
          <Styled.ContactContainer>
            <Styled.DecorationA href={`mailto:${EMAIL}`}>
              <Styled.Email />
            </Styled.DecorationA>
          </Styled.ContactContainer>
          <Styled.ContactContainer>

            <Styled.DecorationA href=' https://github.com/AntonioPasan07' target="_blank">
              <Styled.Github />
            </Styled.DecorationA>
          </Styled.ContactContainer>
          <Styled.ContactContainer>

            <Styled.DecorationA href='https://www.linkedin.com/in/antonio-j-pasan' target="_blank" >
              <Styled.LinkedIn />

            </Styled.DecorationA>
          </Styled.ContactContainer>
        </Styled.MotionDivContact>

      </Styled.TextContainer>
      <Styled.MotionFoto src='marco.png' variants={fadeIn('right', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }}></Styled.MotionFoto>

    </Styled.Container>
  </section>

  )
}

export default Profile
import Styled from './styles'

const Header = () => {

  return (<section>
    <Styled.Container id='home'>
      <Styled.Img src="Logo.png"></Styled.Img>
      <Styled.DecorationA href='https://github.com/AntonioPasan07/Portfolio/tree/main/Portfolio' target='_blank'>
        <Styled.Button>portfolio</Styled.Button>
        </Styled.DecorationA>
    </Styled.Container>
  </section>

  )
}
export default Header
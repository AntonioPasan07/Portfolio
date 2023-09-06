import React from 'react'
import { Link } from 'react-scroll'
import Styled from './styles'

const Navbar = () => {

    return (<>
        <Styled.NavContainer>
            <Styled.DivContainer>
                <Link to='home' smooth={true} duration={500} >
                    <Styled.StyledIcon />
                </Link>
                <Link to='About' smooth={true} duration={500} >
                    <Styled.StyledIcon2 />
                </Link>
                <Link to='estudios' smooth={true} duration={500} >
                    <Styled.StyledIcon3 />
                </Link >
                <Link to='proyectos' smooth={true} duration={500} >
                    <Styled.StyledIcon4 />
                </Link>
                <Link to='mensaje' smooth={true} duration={500}>
                    <Styled.StyledIcon5 />
                </Link>
            </Styled.DivContainer>
        </Styled.NavContainer>
    </>
    )
}
export default Navbar
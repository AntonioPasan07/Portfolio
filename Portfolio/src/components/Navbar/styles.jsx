import {styled} from 'styled-components'
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsClipboardData, BsChatSquare } from 'react-icons/bs'
const NavContainer = styled.nav`
display: flex;
justify-content: space-evenly; 
align-items: flex-end; 
position: fixed; 
bottom: 0; 
width: 100%; 
background-color: #333;
padding: 10px; 
`
const DivContainer = styled.div`
    display: flex;
    width: 450px;
    justify-content: space-evenly;
    
`
const StyledIcon = styled(BiHomeAlt)`
color: white;
cursor: pointer;
transition: color 0.3s;
font-size:20px;

&:hover {
  color: #00ffff;
  }
  
`
const StyledIcon2 = styled(BiUser)`
color: white;
cursor: pointer;
transition: color 0.3s;
font-size:20px;
&:hover {
  color: #00ffff;
  }
`

const StyledIcon4 = styled(BsBriefcase)`
color: white;
cursor: pointer;
transition: color 0.3s;
font-size:20px;
&:hover {
  color: #00ffff;
  }
  
`
const StyledIcon3 = styled(BsClipboardData)`
color: white;
cursor: pointer;
transition: color 0.3s;
font-size:20px;
&:hover {
  color: #00ffff;
  }
 
`
const StyledIcon5 = styled(BsChatSquare)`
color: white;
cursor: pointer;
transition: color 0.3s;
font-size:20px;
&:hover {
  color: #00ffff;
  }
  
`



export default {
    NavContainer,
    DivContainer,
    StyledIcon,
    StyledIcon2,
    StyledIcon3,
    StyledIcon4,
    StyledIcon5,
};
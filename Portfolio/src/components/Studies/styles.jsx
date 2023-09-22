import {styled} from 'styled-components'
import {RiJavascriptFill }from 'react-icons/ri'
import {FaNodeJs, FaHtml5, FaReact, FaDocker}from 'react-icons/fa'
import {IoLogoCss3}from 'react-icons/io'
import { SiAdminer}from 'react-icons/si'
import {BiLogoPostgresql}from 'react-icons/bi'




const BookContainer = styled.div`
  perspective: 1000px;
  width: 600px;
  height: 820px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 630px) {
    width: 390px;
  }
`

const Book = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s;
  transform: ${(props) => (props.isOpen ? 'rotateY(-180deg)' : 'none')};
  
`

const BookInner = styled.div`
padding-top:10%;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #efefef;
  border-radius: 10px;
  
 
`

const BookInnerFront = styled(BookInner)`
  transform: rotateY(0deg);
  transform-origin: left;
  margin-top:40px;
`

const BookInnerBack = styled(BookInner)`
  transform: rotateY(180deg);
  margin-top:40px;
  
`

const Title = styled.h1`
  text-align: center;
  color: #e64433;
  padding-top: 20px;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  
`

const SubTitle = styled.h3`
  color: #090909;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgb(57 57 57 / 30%);
`

const Texto1 = styled.h5`
  padding: 0;
  margin: 0;
  color: #212020;
  font-size: 20px;
  
 // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
const Click = styled.h2`
  text-align: center;
  color: #e64433;
  padding-top: 20px;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition:color 0.3s;
  
  &:hover{
    color: #05bbac;
  }
  
`

const Parrafo = styled.p`
 
margin:4px;
  color: #3e3737;
  padding-top: 20px;
  font-size: 20px;
  
`

const Strong = styled.strong`
 
 color:#4770f5;
`

const AnimatedIconsContainer = styled.div`
   
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap:wrap;
  margin-top: 30px; 
  position: relative;

  @media (max-width: 1130px) {
   display:none;
  }

`

const IconNode = styled(FaNodeJs)`
color: #089508;
font-size:50px;
margin:5px;

`
const IconJavaScript = styled(RiJavascriptFill)`
color: #dadd3b;
font-size: 50px;
margin: 5px;

`
const IconHtml = styled(FaHtml5)`
font-size: 50px;
color: #f23e07;
margin: 5px;


`
const IconCss = styled(IoLogoCss3)`
color: #113ace;
font-size: 50px;
margin: 5px;
  
`
const IconReact = styled(FaReact)`
color: #00ffff;
font-size: 50px;
margin: 5px;

`
const IconPosgre = styled(BiLogoPostgresql)`
color: #336791;
font-size: 50px;
margin: 5px;
`
const IconAdminer = styled(SiAdminer)`
font-size: 50px;
margin: 5px;

`
const IconDocker = styled(FaDocker)`
color: #29B6F6;
font-size: 50px;
margin: 5px;
`
const IconContainer = styled.p`
  margin: 15px;
 display:flex;
 flex-direction:column;
 align-items: center;
`
const card2 = styled.div`
width:250px;
height:250px;
border-radius:10px;
background-size:cover;
display: flex;
justify-content:space-around;
align-items: flex-end;
margin: auto;
box-shadow: 0 0 5px black;
margin-top:25px;
cursor: pointer;


@media (max-width: 1130px) {
    width: 150px;
  }

`
const CardProject = styled.div`

gap:5px;
display: flex;
flex-wrap: wrap;
width: 100%;
`
const Pcard = styled.p`
padding-top:20px;
font-size: 20px;
color: white;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

&:hover{
  color:red;
}

`
const ContainerSoft = styled.div`
display:flex;
height:400px;
`
const Container1 = styled.div`
padding-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
const Container2 = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export default {
  BookContainer,
  Book,
  BookInner,
  BookInnerFront,
  BookInnerBack,
  Title,
  SubTitle,
  Texto1,
  Parrafo,
  Strong,
  IconNode,
  IconJavaScript,
  IconHtml,
  IconCss,
  IconReact,
  IconPosgre,
  IconAdminer,
  IconDocker,
  AnimatedIconsContainer,
  Click,
  card2,
  CardProject,
  Pcard,
  ContainerSoft,
  Container1,
  Container2,
  IconContainer,
};
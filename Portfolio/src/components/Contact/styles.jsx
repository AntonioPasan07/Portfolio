import styled from 'styled-components'
import {motion} from 'framer-motion'

const Section = styled.section`
display: flex;
width: 100%;
 margin-top: 20%;
flex-direction: column;
justify-content: center;
align-items: center;
margin-block: 150px;
@media (max-width: 630px) {
  margin-block: 150px;
   margin-top:20%;
  } 

`
const Container = styled(motion.div)`
margin-top: 10%;

box-shadow: 21px 17px 14px 0px rgba(0,0,0,0.75);
border: 3px solid #ccc;
padding: 25px;
border-radius: 10px;
background-color: #01454f;

@media (max-width: 630px) {
  margin-block: 100px;
   width: 350px;
   margin-top:20%;
  } 

`
const Form = styled.form`
display: flex;
flex-direction:column;
 min-width: 600px;
margin: 0 auto;

  @media (max-width: 630px) {
   min-width: 350px;
  } 

`
const Title = styled.h1`
font-size:2rem;
color: white;
text-align: left;
`
const Input = styled.input`
width: 98%;
margin-bottom: 20px;
border: 3px solid #ccc;
border-radius: 4px;
`;

const Textatea = styled.textarea`
width: 98%;
margin-bottom: 20px;
border: 3px solid #ccc;
border-radius: 4px;
`
const Button = styled.button`
margin-top: 20px;
margin-right: 25%;
margin-left: 25%;
text-align: center;
border: 3px solid #ccc;
border-radius: 4px;
`
const Label = styled.label`
font-size: 20px;
color: white;
display: block;
margin-bottom: 10px;
`;
const Span = styled.span`
display:block;
color: #d08383;
font-size: x-small;
margin-top:-15px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
export default {
    Section,
    Form,
    Input,
    Title,
    Textatea,
    Button,
    Label,
    Span,
    Container,


}
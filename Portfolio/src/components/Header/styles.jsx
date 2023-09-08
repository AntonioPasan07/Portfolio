import {styled} from 'styled-components'

const Container = styled.div`
display: flex;
background-color: black;
justify-content: space-between;
align-items:center;
flex-wrap: nowrap;
flex-direction: row;
`
const Img = styled.img`
width: 80px;
    display: flex;
    margin-left: 5%;
`
const Button = styled.button`
width: 100px;
    height: 30px;
    border-radius: 10px;
    color: white;
    background: linear-gradient(225deg, rgba(8,225,242,1) 0%, rgba(35,154,203,1) 15%, rgba(222,22,22,1) 100%);
    margin-right: 45px;

`
const DecorationA = styled.a`
  text-decoration: none;
`
export default{
    Container,
    Img,
    Button,
    DecorationA,
}
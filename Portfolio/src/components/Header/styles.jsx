import {styled} from 'styled-components'

const Container = styled.div`
display: flex;
background-color: black;
justify-content: flex-start;
flex-wrap: nowrap;
flex-direction: row;
`
const Img = styled.img`
width: 80px;
    display: flex;
    margin-left: 5%;
`
export default{
    Container,
    Img,
}
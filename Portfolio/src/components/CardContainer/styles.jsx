import styled from 'styled-components'


const Container = styled.div`
display:flex;
gap:20px;
margin-top: 20%;

@media(max-width: 540px) {
   
    display:flex;
    flex-direction: column;
  }
`
export default{
    Container,
}
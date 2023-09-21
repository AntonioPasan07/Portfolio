import styled from 'styled-components'


const Container = styled.div`
display:flex;
gap:20px;
margin-top: 400px;

@media(max-width: 630px) {
   
    display:flex;
    flex-direction: column;
    gap: 200px;
  }
`
export default{
    Container,
}
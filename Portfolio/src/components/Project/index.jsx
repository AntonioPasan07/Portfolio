import Styled from '../Studies/styles'
import { useState } from 'react';
import data from '../../data.json'

const Project = () => {

  const skills = data.soft.skills
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styled.BookContainer>
      <Styled.Book isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Styled.BookInnerFront>
          <Styled.Title id='proyectos'>Proyectos:</Styled.Title>
          <Styled.CardProject>
            {Object.keys(data.project).map((key) => (
              <Styled.card2 key={key} style={{ backgroundImage: `url(${data.project[key].img})` }}>
                <Styled.Link href={data.project[key].link} target="_blank" rel="noopener noreferrer">
                  <Styled.Pcard>{data.project[key].title}</Styled.Pcard>
                </Styled.Link>
              </Styled.card2>
            ))}
          </Styled.CardProject>
          <Styled.Click>Click</Styled.Click>
        </Styled.BookInnerFront>
        <Styled.BookInnerBack >
          <Styled.Title>Soft Skills:</Styled.Title>
          <Styled.ContainerSoft>
            <Styled.Container1>
              {skills.text1.map((skill, index) => (
                <Styled.Texto1 key={index}>{skill}</Styled.Texto1>
              ))}
            </Styled.Container1>
            <Styled.Container2>
              {skills.text2.map((skill, index) => (
                <Styled.Texto1 key={index}>{skill}</Styled.Texto1>
              ))}
            </Styled.Container2>
          </Styled.ContainerSoft>
          <Styled.Click>Click</Styled.Click>
        </Styled.BookInnerBack>
      </Styled.Book>
    </Styled.BookContainer>
  )
}
export default Project
import React from "react";
import Studies from "../Studies";
import Project from "../Project";
import Styled from './styles'

const CardContainer = () => {

  return (<>
    <Styled.Container>
      <Studies />
      <Project />
    </Styled.Container>
  </>
  )
}
export default CardContainer
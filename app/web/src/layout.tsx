import styled from "styled-components"

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const CenteringContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled(CenteringContainer)`
  padding: 2rem;
`

export const TextContainer = styled(Container)`
  background: black;
  color: white;
  flex-grow: 1;
  overflow: auto;
  font-size: calc(10px + 1.8vmin);
  overflow: auto;
  padding: 0em 2em;
  text-align: justify;
`

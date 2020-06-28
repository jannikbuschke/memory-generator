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
  padding: 1rem;
`

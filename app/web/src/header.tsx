import * as React from "react"
import styled from "styled-components"

export function Header() {
  return (
    <div>
      <Title>ERINNERUNGS</Title>
      <Subtitle>GENERATOR</Subtitle>
    </div>
  )
}

const Title = styled.h1`
  margin-bottom: 0;
`

const Subtitle = styled.h1`
  font-style: italic;
  margin-bottom: 0;
`

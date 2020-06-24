import * as React from "react"
import styled from "styled-components"
import { useField } from "formik"

export function Header() {
  const [{ value: intro }, { touched: introTouched }] = useField("intro")
  const [{ value: tone }, { touched: toneTouched }] = useField("tone")
  const [{ value: volume }, { touched: volumeTouched }] = useField("volume")
  return (
    <div>
      <Title>ERINNERUNGS</Title>
      <Subtitle>GENERATOR</Subtitle>
      <Value style={{ opacity: introTouched ? 1 : 0 }}>{intro || ""}</Value>
      <Value style={{ opacity: volumeTouched ? 1 : 0 }}>{volume || ""}</Value>
      <Value style={{ opacity: toneTouched ? 1 : 0 }}>{tone || ""}</Value>
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

const Value = styled.h3`
  margin-bottom: 0;
`

import * as React from "react"
import styled from "styled-components"
import { useField } from "formik"
import { mapVolume } from "./pages/2"

export function Header() {
  const [{ value: intro }, { touched: introTouched }] = useField("intro")
  const [{ value: tone }, { touched: toneTouched }] = useField("tone")
  const [{ value: volume }, { touched: volumeTouched }] = useField("volume")
  return (
    <Container>
      <div
        style={{
          marginLeft: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Title>ERINNERUNGS</Title>
        <Subtitle>GENERATOR</Subtitle>
      </div>
      <div style={{ marginRight: "0.5rem" }}>
        <Value style={{ opacity: introTouched ? 1 : 0 }}>Geschichte</Value>
        <Value style={{ opacity: introTouched ? 1 : 0 }}>
          {intro + "," || "_"}
        </Value>
        <Value style={{ opacity: volumeTouched ? 1 : 0 }}>
          {mapVolume(volume)?.toLowerCase() || "_"}
        </Value>
        <Value style={{ opacity: toneTouched ? 1 : 0 }}>{tone || "_"}</Value>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100px;

  background: black;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  margin-bottom: 0;
  color: white;
  font-size: calc(12px + 1.8vmin);
`

const Subtitle = styled.div`
  font-style: italic;
  margin-bottom: 0;
  color: white;
  font-size: calc(12px + 1.8vmin);
`

const Value = styled.div`
  margin-bottom: 0;
  color: white;
`

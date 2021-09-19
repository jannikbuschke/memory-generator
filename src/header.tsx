import * as React from "react"
import styled from "styled-components"
import { useField, useFormikContext } from "formik"
import { mapVolume } from "./pages/2"
import { useNavigation } from "./navigation/navigation"

export function Header() {
  const [{ value: intro }, { touched: introTouched }] = useField("intro")
  const [{ value: tone }, { touched: toneTouched }] = useField("tone")
  const [{ value: volume }, { touched: volumeTouched }] = useField("volume")
  const { navigate } = useNavigation()
  const { resetForm } = useFormikContext()
  return (
    <Container
      onClick={() => {
        resetForm()
        navigate("landing")
      }}
    >
      <div
        style={{
          marginLeft: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <b>
          <Title>ERINNERUNGS</Title>
          <Subtitle>GENERATOR</Subtitle>
        </b>
      </div>
      <div style={{ marginRight: "0.5rem" }}>
        <Value style={{ opacity: introTouched ? 1 : 0 }}>GESCHICHTE</Value>
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
  &:hover {
    cursor: pointer;
  }
`

const Title = styled.div`
  margin-bottom: 0;
  color: white;
  font-size: calc(12px + 2.2vmin);
`

const Subtitle = styled.div`
  font-style: italic;
  margin-bottom: 0;
  color: white;
  font-size: calc(12px + 2.2vmin);
`

const Value = styled.div`
  margin-bottom: 0;
  color: white;
`

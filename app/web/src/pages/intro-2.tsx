import * as React from "react"
import styled from "styled-components"
import { useNavigation } from "../navigation/navigation"

export function Intro2() {
  return (
    <Container>
      <p>
        Wähle in drei Schritten, wie du an die Geschichte des Lagerhaus G
        erinnern möchtest.
      </p>
      <p>
        Speichere anschließend dein Ergebnis. Das System sammelt alle
        gespeicherten Erinnerungen. Wie erinnern wir uns in Zukunft an die
        Geschichte des Lagerhaus G?
      </p>
    </Container>
  )
}

const Container = styled.div`
  font-size: calc(10px + 1.8vmin);
`

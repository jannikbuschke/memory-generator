import * as React from "react"
import styled from "styled-components"
import { Button } from "antd"
import { ButtonBar, useNavigation } from "./navigation"

export function IntroVideo() {
  const { navigate } = useNavigation()
  return (
    <div
      style={{ width: 200, height: 200, background: "black", color: "white" }}
      onClick={() => navigate("intro")}
    >
      INTRO VIDEO
    </div>
  )
}

export function IntroText() {
  return (
    <Container>
      Hallo, du hast den Erinnerungsgenerator für das Lagerhaus G geöffnet. Ein
      Tool zur Erstellung von Erinnerungen an eine Vergangenheit, die wir selbst
      nicht erlebt haben. Wie erinnern wir uns an nationalsozialistische
      Geschichte, wenn es bald keine Zeitzeugen mehr gibt? Wie erinnern wir uns,
      während fremdenfeindliche Gruppierungen rassistisches Gedankengut streuen?
      Trauern wir? Schämen wir uns? Sind wir wütend? Erheben wir unsere Stimme?
      Oder wollen wir still Anteil nehmen? Was ist würdiges Gedenken? Der
      Erinnerungsgenerator hilft dabei, das eigene Unbehagen aufzubrechen.
      Generiere jetzt deine Erinnerung!
    </Container>
  )
}

const Container = styled.div``

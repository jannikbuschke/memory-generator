import * as React from "react"
import styled from "styled-components"
import { Container } from "../layout"

export function IntroText() {
  return (
    <TextContainer>
      <p>
        Die Gedenktafel ist zur Zeit der einzige Hinweis auf die
        nationalsozialistische Vergangenheit des Lagerhaus G. Nüchtern und
        faktisch gibt sie die Geschichte wider. Mit dem Erinnerungsgenerator
        kannst du Geschichte aus verschiedenen Perspektiven wahrnehmen. Trauer?
        Scham? Wut? Wie du dich an die Geschichte erinnern willst, hat direkten
        Einfluss darauf, wie sie geschrieben wird.
      </p>
      <p>Speichere am Ende dein Ergebnis oder schlage neue Begriffe vor.</p>
    </TextContainer>
  )
}

const TextContainer = styled(Container)`
  background: black;
  color: white;
  flex-grow: 1;
  overflow: auto;
  font-size: calc(10px + 1.8vmin);
  overflow: auto;
  padding: 2em;
  text-align: justify;
`

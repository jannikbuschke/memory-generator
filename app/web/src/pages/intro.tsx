import * as React from "react"
import styled from "styled-components"
import { CenteringContainer, Container } from "../layout"

export function IntroText() {
  return (
    <PageContainer>
      <TextContainer>
        <p>
          Die Gedenktafel ist zur Zeit der einzige Hinweis auf die
          nationalsozialistische Vergangenheit des Lagerhaus G. Nüchtern und
          faktisch gibt sie die Geschichte wider.
        </p>
        <p>
          Mit dem Erinnerungsgenerator kannst du die Geschichte aus
          verschiedenen Perspektiven wahrnehmen. Trauer? Scham? Wut? Wie du dich
          an die Geschichte erinnern willst, hat direkten Einfluss darauf, wie
          sie geschrieben wird.
        </p>
      </TextContainer>
    </PageContainer>
  )
}

const PageContainer = styled(CenteringContainer)``

const TextContainer = styled(Container)`
  font-size: calc(10px + 1.8vmin);
  max-width: 800px;
`

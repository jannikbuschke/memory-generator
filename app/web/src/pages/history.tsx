import * as React from "react"
import styled from "styled-components"
import { ContentContainer } from "../layout"

export function History() {
  return (
    <ContentContainer>
      <p>
        Alle Informationen aus den generierten Texten haben wir aus öffentlich
        zugänglichem Material zusammengestellt. Möchtest du eigenständig weiter
        recherchieren, haben wir hier einige Links zu unseren Quellen
        zusammengestellt.
      </p>
      <b>
        <div>ERINNERUNGEN GENERIEREN</div>
      </b>
      <Link>Initiative Dessauer Ufer</Link>
      <Link>KZ Gedenkstätte Neuengamme Dessauer Ufer</Link>
      <Link>Hamburg Veddel Frauen</Link>
      <Link>Hamburg Veddel Männer</Link>
      <Link>
        Berichte und Biografien von Hédi Fried, Livia Fränkel, Edith Kraus,
        Dagmar Lieblová, Zuzana Rùžièková, Jean Le Bris u. w.
      </Link>
    </ContentContainer>
  )
}

const Link = styled.a`
  display: block;
`

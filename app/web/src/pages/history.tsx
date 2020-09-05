import * as React from "react"
import styled from "styled-components"
import { TextContainer } from "../layout"
import { Space } from "antd"

export function History() {
  return (
    <TextContainer>
      <br />
      <Title>HINTERGRÜNDE</Title>
      <p>
        Alle Informationen aus den generierten Texten haben wir aus öffentlich
        zugänglichem Material zusammengestellt. Möchtest du eigenständig weiter
        recherchieren, haben wir hier einige Links zu unseren Quellen
        zusammengestellt.
      </p>

      <br />
      <br />
      <Space direction="vertical" size="large">
        <Link>Initiative Dessauer Ufer</Link>
        <Link>KZ Gedenkstätte Neuengamme Dessauer Ufer</Link>
        <Link>Hamburg Veddel Frauen</Link>
        <Link>Hamburg Veddel Männer</Link>
        <Link>
          Berichte und Biografien von Hédi Fried, Livia Fränkel, Edith Kraus,
          Dagmar Lieblová, Zuzana Rùžièková, Jean Le Bris u. w.
        </Link>
      </Space>
      <br />
      <br />
    </TextContainer>
  )
}

const Title = styled.h1`
  color: white;
`

const Link = styled.a`
  display: block;
  color: white;
  text-decoration: underline;
`

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
        <Link>
          <a href="https://initiativedessauerufer.noblogs.org/" target="_blank">
            Initiative Dessauer Ufer
          </a>
        </Link>
        <Link>
          <a href="https://www.kz-gedenkstaette-neuengamme.de/" target="_blank">
            KZ Gedenkstätte Neuengamme
          </a>
        </Link>
        <Link>
          <a
            href="https://www.kz-gedenkstaette-neuengamme.de/geschichte/kz-aussenlager/aussenlagerliste/hamburg-veddel-frauen/"
            target="_blank"
          >
            Hamburg Veddel Frauen
          </a>
        </Link>
        <Link>
          <a
            href="https://www.kz-gedenkstaette-neuengamme.de/geschichte/kz-aussenlager/aussenlagerliste/hamburg-veddel-maenner/"
            target="_blank"
          >
            Hamburg Veddel Männer
          </a>
        </Link>

        <Link>
          <a
            href="https://sites.google.com/view/lagerhaus-g-hamburg/lagerhaus-g-schon-mal-geh%C3%B6rt?"
            target="_blank"
          >
            Curating the Invisible: Lagerhaus G
          </a>
        </Link>

        <Link>
          <a
            href="https://www.kz-gedenkstaette-neuengamme.de/vorbereitung/biografie_hedi_szmuk.html"
            target="_blank"
          >
            Biografien von Hédi Fried und Livia Fränkel
          </a>
        </Link>
        <p>
          Links zu weiteren Berichten und Biografien (Edith Kraus, Dagmar
          Lieblová, Zuzana Rùžièková, Jean Le Bris) folgen.
        </p>
      </Space>
      <br />
      <br />
    </TextContainer>
  )
}

const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: calc(12px + 1.8vmin);
`

const Link = styled.a`
  display: block;
  color: white;
  text-decoration: underline;
`

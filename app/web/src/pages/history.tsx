import * as React from "react"
import { useFormikContext } from "formik"
import styled from "styled-components"

export function History() {
  const ctx = useFormikContext<any>()

  return (
    <>
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
    </>
  )
}

const Link = styled.a`
  display: block;
`

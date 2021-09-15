import * as React from "react"
import styled from "styled-components"
import { Container } from "../layout"
import { Space } from "antd"

export function Info() {
  return (
    <TextContainer>
      <br />
      <Title>INFO</Title>
      <SubTitle>UND TEAM</SubTitle>
      <p>
        Das Lagerhaus G befindet sich zur Zeit in einem Gebiet Städtebaulicher
        Planungen. Es ist unklar, wie das Gebäude in Zukunft genutzt werden soll
        und auch, wie hier eine Aufarbeitung der Geschichte stattfinden wird.
        Heute erinnert eine Gedenktafel an die Vergangenheit des Speichers, die
        die Geschichte auf neutrale und gemäßigte Art präsentiert. Wie erinnern
        wir uns in Zukunft? Der Erinnerungs-generator gibt einen Anreiz, sich
        aktiv zur Geschichte zu positionieren, statt sie nur passiv zu
        konsumieren. Durch alternative und emotionale Erinnerungstexte, stellt
        er die offizielle Erzählweise von Geschichte in Frage.
      </p>
      <p>
        Das Tool ist ein Hochschulprojekt, welches in Zusammenarbeit mit
        Designer_innen, Architekt_innen, Programmierer_innen, Linguist_innen und
        Texter_innen entstanden ist. Der Erinnerungsgenerator funktioniert mit
        einer regelbasierten automatisierten Textengine.
      </p>
      <br />
      <br />

      <Space direction="vertical" size="large">
        <div>
          JULIANE KATZER
          <div>
            <i>
              M.A. Kommunikationsdesign <br /> (HAW Hamburg)
            </i>
          </div>
          <div>
            <a href="https://julianekatzer.de/">julianekatzer.de</a>
          </div>
        </div>

        <div>
          VICTORIA DLUGOKINSKI
          <div>
            <i>
              M.A. Architektur <br /> (HCU Hamburg)
            </i>
          </div>
          <div>v.dlugokinski@web.de</div>
        </div>

        <div>
          LANGTEC SEMANTIC TEXT PROCESSING
          <div>
            <i>
              Bereitstellung der Textengine und Umsetzung der automatisierten
              Textgenerierung
            </i>
          </div>
          <div>
            <a href="https://www.langtec.de/">langtec.de</a>
          </div>
        </div>

        <div>
          JANNIK BUSCHKE
          <div>
            <i>Implementierung Frontend</i>
          </div>
          <div>
            <a href="https://twitter.com/jannikbuschke">
              twitter.com/jannikbuschke
            </a>
          </div>
          <div>
            <a href="https://github.com/jannikbuschke">
              github.com/jannikbuschke
            </a>
          </div>
        </div>

        <div>
          TILL BROKHAUSEN
          <div>
            <i>Creative Copywriter</i>
          </div>
          <div>
            <a href="https://till.am/">till.am</a>
          </div>
        </div>
      </Space>
    </TextContainer>
  )
}

const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: calc(12px + 1.8vmin);
`
const SubTitle = styled.h1`
  color: white;
  margin: 0;
  font-style: italic;
  font-size: calc(12px + 1.8vmin);
`

const TextContainer = styled(Container)`
  background: black;
  color: white;
  flex-grow: 1;
  overflow: auto;
  font-size: calc(10px + 1.8vmin);
  overflow: auto;
  padding: 0em 2em;
  text-align: justify;
`

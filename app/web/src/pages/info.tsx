import * as React from "react"
import styled from "styled-components"
import { Container } from "../layout"

export function Info() {
  return (
    <TextContainer>
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
        Texter_innen entstanden ist. Er basiert auf einer regelbasierten
        automatisierten Textengine.
      </p>

      <p>
        <div>Juliane Katzer</div>
        <div>julianekatzer.de</div>
        <div>@studio___ding</div>
        <div>Verantwortlich/Masterabsolventin Studiengang</div>
      </p>
      <p>
        <div>Victoria Dlugokinski</div>
        <div>Mitverantwortlich/Masterabsolventin Architektur</div>
      </p>
      <p>
        <div>LangTec Semantic Text Processing</div>
        <div>langtec.de</div>
        <div>
          Implementierung und Bereitstellung von künstlicher Intelligenz
        </div>
      </p>
      <p>
        <div>Jannik Buschke</div>
        <div>twitter.com</div>
        <div>github.com.com</div>
        <div>Implementierung Frontend</div>
      </p>
      <p>
        <div>Till Brokhausen till.am</div>
      </p>
    </TextContainer>
  )
}

const Title = styled.h1`
  color: white;
  margin: 0;
`
const SubTitle = styled.h1`
  color: white;
  margin: 0;
  font-style: italic;
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

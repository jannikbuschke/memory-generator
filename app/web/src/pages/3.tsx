import * as React from "react"
import { Question, ActionContainer, Action } from "./questions.shared"
import { ContentContainer } from "../layout"

export function Third() {
  return (
    <ContentContainer>
      <Question>Was beabsichtigst du mit deiner Erinnerung?</Question>
      <ActionContainer>
        <Action name="tone" title={"Gedenken"} value="gedenken" />
        <Action name="tone" title={"Ehren"} value="ehren" />
        <Action name="tone" title={"Mahnen"} value="mahnen" />
      </ActionContainer>
    </ContentContainer>
  )
}

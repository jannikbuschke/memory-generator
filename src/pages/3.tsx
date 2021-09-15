import * as React from "react"
import { Question, ActionContainer, Action } from "./questions.shared"
import { ContentContainer } from "../layout"

export function Third() {
  return (
    <ContentContainer>
      <Question>Was beabsichtigst du mit deiner Erinnerung?</Question>
      <ActionContainer>
        <Action name="tone" title={"GEDENKEN"} value="GEDENKEN" />
        <Action name="tone" title={"EHREN"} value="EHREN" />
        <Action name="tone" title={"MAHNEN"} value="MAHNEN" />
      </ActionContainer>
    </ContentContainer>
  )
}

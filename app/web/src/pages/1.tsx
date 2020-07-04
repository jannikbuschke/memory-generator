import * as React from "react"
import { Question, ActionContainer, Action } from "./questions.shared"
import { ContentContainer } from "../layout"

export function First() {
  return (
    <ContentContainer>
      <Question>Wie verhältst du dich zur Geschichte?</Question>
      <ActionContainer>
        <Action name="intro" value="bereuen" title="Bereuen" />
        <Action name="intro" value="verachten" title="Verachten" />
        <Action name="intro" value="trauern" title="Betrauern" />
        <Action name="intro" value="beschweigen" title="Beschweigen" />
      </ActionContainer>
    </ContentContainer>
  )
}

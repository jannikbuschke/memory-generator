import * as React from "react"
import { Question, ActionContainer, Action } from "./questions.shared"
import { ContentContainer } from "../layout"
import { useFormikContext } from "formik"
import { Modal } from "antd"

export function First() {
  const { submitForm } = useFormikContext()

  return (
    <ContentContainer>
      <Question>Wie verhältst du dich zur Geschichte?</Question>
      <ActionContainer>
        <Action name="intro" title="BEREUEN" value="BEREUEN" />
        <Action name="intro" title="VERACHTEN" value="VERACHTEN" />
        <Action name="intro" title="BETRAUERN" value="BETRAUERN" />
        <Action
          name="intro"
          value="beschweigen"
          title="BESCHWEIGEN"
          onClick={() => {
            Modal.confirm({
              title: "Beschweigen",
              okText: "Ja",
              cancelText: "Nein",
              content:
                "Möchtest du etwas Zeit innehalten und in Stille gedenken?",
              onOk: submitForm,
            })
          }}
        />
      </ActionContainer>
    </ContentContainer>
  )
}

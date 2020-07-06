import * as React from "react"
import { ContentContainer } from "../layout"
import { useNavigation } from "../navigation/navigation"
import { Button } from "antd"
import { useFormikContext } from "formik"

export function Fourth() {
  const { submitForm } = useFormikContext()
  const { next } = useNavigation()

  return (
    <ContentContainer>
      <Button
        size="large"
        type="primary"
        onClick={() => {
          submitForm()
          next()
        }}
      >
        Erinnerung jetzt generieren
      </Button>
    </ContentContainer>
  )
}

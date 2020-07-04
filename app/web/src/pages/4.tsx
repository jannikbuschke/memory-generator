import * as React from "react"
import { ContentContainer } from "../layout"
import { useNavigation } from "../navigation/navigation"
import { Button } from "antd"

export function Fourth() {
  const { next } = useNavigation()

  return (
    <ContentContainer>
      <Button size="large" type="primary" onClick={next}>
        Erinnerung generieren
      </Button>
    </ContentContainer>
  )
}

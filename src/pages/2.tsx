import * as React from "react"
import { Question, ActionContainer, Action } from "./questions.shared"
import { ContentContainer } from "../layout"

// "still" | "mittel" | "laut" | "ganz laut"

export function mapVolume(volume: "still" | "mittel" | "laut" | "ganz laut") {
  switch (volume) {
    case "still":
      return "STILL"
    case "mittel":
      return "BEWEGT"
    case "laut":
      return "ERGRIFFEN"
    case "ganz laut":
      return "IMPULSIV"
  }
}

export function Second() {
  return (
    <ContentContainer>
      <Question>Wie willst du an die Geschichte erinnern?</Question>
      <ActionContainer>
        <Action name="volume" title={mapVolume("still")} value="still" />
        <Action name="volume" title={mapVolume("mittel")} value="mittel" />
        <Action name="volume" title={mapVolume("laut")} value="laut" />
        <Action
          name="volume"
          title={mapVolume("ganz laut")}
          value="ganz laut"
        />
      </ActionContainer>
    </ContentContainer>
  )
}

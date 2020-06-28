import * as React from "react"
import { useNavigation } from "../navigation/navigation"
import logo from "../video.gif"

export function IntroVideo() {
  const { navigate } = useNavigation()
  return (
    <img
      style={{ maxWidth: "80vw", maxHeight: "40vh" }}
      onClick={() => navigate("intro1")}
      src={logo}
      alt="loading..."
    />
  )
}

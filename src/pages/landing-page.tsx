import * as React from "react"
import { useNavigation } from "../navigation/navigation"
import logo from "../video.gif"
import { ContentContainer } from "../layout"
import { useFormikContext } from "formik"

export function IntroVideo() {
  const { navigate, currentPage } = useNavigation()
  const { resetForm } = useFormikContext()
  React.useEffect(() => {
    if (currentPage.name === "landing") {
      resetForm()
    }
  }, [currentPage, resetForm])
  return (
    <ContentContainer>
      <img
        style={{ maxWidth: "80vw", maxHeight: "40vh" }}
        onClick={() => navigate("intro1")}
        src={logo}
        alt="loading..."
      />
    </ContentContainer>
  )
}

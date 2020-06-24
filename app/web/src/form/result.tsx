import * as React from "react"
import { useFormikContext } from "formik"
import { useNavigation } from "../navigation"

export function Result() {
  const { text } = useNavigation()
  const ctx = useFormikContext()
  React.useEffect(() => {
    ctx.submitForm()
  }, [])
  return text === null ? null : (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  )
}

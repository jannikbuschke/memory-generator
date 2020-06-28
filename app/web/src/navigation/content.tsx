import * as React from "react"
import { useNavigation } from "./navigation"

export function Content() {
  const ctx = useNavigation()
  const Container = ctx.currentPage.container || ctx.defaultContainer
  return <Container>{ctx.currentPage.Content}</Container>
}

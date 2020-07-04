import * as React from "react"
import { useNavigation } from "./navigation"
import styled from "styled-components"

export function Content() {
  const ctx = useNavigation()
  return <Container>{ctx.currentPage.Content}</Container>
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`

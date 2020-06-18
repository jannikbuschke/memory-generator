import * as React from "react"
import styled from "styled-components"
import { useNavigation } from "./navigation"

export function Content() {
  const ctx = useNavigation()
  return <Container>{ctx.currentPage.Content}</Container>
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

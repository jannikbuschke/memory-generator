import * as React from "react"
import { Button } from "antd"
import styled from "styled-components"
import { useNavigation } from "./navigation"

export function ButtonBar() {
  const {
    navigate,
    currentPage: { next, previous, name },
  } = useNavigation()

  return (
    <Bar>
      {previous ? (
        <Button
          size="large"
          onClick={() => navigate(previous.page)}
          {...previous.props}
        >
          {previous.title}
        </Button>
      ) : (
        <div></div>
      )}
      {next ? (
        <Button
          size="large"
          onClick={() => navigate(next.page)}
          {...next.props}
        >
          {next.title}
        </Button>
      ) : (
        <div></div>
      )}
    </Bar>
  )
}

export const Bar = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

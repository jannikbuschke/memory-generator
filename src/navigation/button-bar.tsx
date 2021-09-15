import * as React from "react"
import { Button } from "antd"
import styled from "styled-components"
import { useNavigation } from "./navigation"

const style: React.CSSProperties = {
  width: "8em",
  height: "3em",
  border: "none",
}

export function ButtonBar() {
  const {
    navigate,
    currentPage: { next, previous, name, showNext },
  } = useNavigation()
  const [key, setKey] = React.useState(Math.random())
  React.useEffect(() => {
    setTimeout(() => {
      setKey(Math.random())
    }, 1000)
  }, [name])

  return (
    <Bar>
      {previous ? (
        <Button
          key={key + "1"}
          size="large"
          onClick={() => navigate(previous.page)}
          style={style}
          {...previous.props}
        >
          {previous.title}
        </Button>
      ) : (
        <div></div>
      )}
      {next && showNext !== false ? (
        <Button
          key={key + "2"}
          size="large"
          onClick={() => navigate(next.page)}
          style={style}
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
  padding: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

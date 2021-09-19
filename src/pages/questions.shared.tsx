import * as React from "react"
import { useField } from "formik"
import { Button, Space } from "antd"
import styled from "styled-components"
import { useNavigation } from "../navigation/navigation"

export function ActionContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <Space direction="vertical" size="large" style={{ marginTop: 20 }}>
      {children}
    </Space>
  )
}

export function Action({
  name,
  value,
  title,
  onClick,
}: {
  name: string
  title: string
  value: string
  onClick?: () => void
}) {
  const { next } = useNavigation()
  const [, , f] = useField(name)
  return (
    <Btn
      size="large"
      style={{ border: "none" }}
      block={true}
      onClick={() => {
        f.setValue(value)
        f.setTouched(true)
        onClick ? onClick() : next()
      }}
    >
      <BtnContent>{title}</BtnContent>
    </Btn>
  )
}

export const BtnContent = styled.span`
  font-weight: bold;
  text-align: left;
  color: black;
  font-size: calc(16px + 1.8vmin);
`

export const Btn = styled(Button)``

export const Question = styled.h1`
  font-weight: normal;
  text-align: left;
  color: black;
  font-size: calc(16px + 0.8vmin);
  margin: 0;
`

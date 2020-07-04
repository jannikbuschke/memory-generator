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
}: {
  name: string
  title: string
  value: string
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
        next()
      }}
    >
      <BtnContent>{title}</BtnContent>
    </Btn>
  )
}

export const BtnContent = styled.span`
  font-weight: bold;
  font-size: calc(20px + 1.8vmin);
`

export const Btn = styled(Button)``

export const Question = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: calc(30px + 1vmin);
  margin: 0;
  font-style: italic;
`

import React from "react"
import "./App.css"
import { Formik, useFormikContext } from "formik"
import { SubmitButton, Form, FormikDebug } from "formik-antd"
import {
  BackgroundContainer,
  SilencePulse,
  SilencedBackgroundContainer,
} from "./silence"
import "antd/dist/antd.css"
import { notification, Button, Spin } from "antd"
import { Options, getText } from "./api"
import { Header } from "./header"
import styled from "styled-components"
import { ProgressBar, ButtonBar, NavigationProvider } from "./navigation"
import { Content } from "./content"

function App() {
  const [silence, setSilence] = React.useState(false)
  const Background = silence ? SilencedBackgroundContainer : BackgroundContainer
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    if (silence) {
      setTimeout(() => {
        setSilence(false)
      }, 20000)
    }
  }, [silence])
  const [text, setText] = React.useState<string | null>(null)
  return (
    <NavigationProvider text={text}>
      {/* <ProgressBar /> */}
      <Container>
        <Formik<Options>
          initialValues={{ intro: "bereuen", tone: "ehren", volume: "mittel" }}
          onSubmit={async (values, f) => {
            if (values.intro === "beschweigen") {
              setSilence(values.intro === "beschweigen")
              f.setSubmitting(false)
            } else {
              f.setSubmitting(true)
              const response = await getText(values)
              if (response.ok) {
                setText(response.data.text)
              } else {
                notification.error({ message: response.error })
              }
            }
          }}
        >
          {(f) => (
            <Spin
              spinning={f.isSubmitting}
              tip="Deine Erinnerung wird generiert..."
            >
              <Form>
                <Background>
                  <Container>
                    <Header />
                    <Content />
                    <div>
                      <AutoStep setIndex={setIndex} />
                    </div>
                    <div>
                      <ButtonBar />
                    </div>
                    {/* <FormikDebug /> */}
                  </Container>
                </Background>
              </Form>
            </Spin>
          )}
        </Formik>
        {silence && <SilencePulse />}
      </Container>
    </NavigationProvider>
  )
}

const Container = styled.div`
  // max-width: 500px;
  // margin: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

function AutoStep({
  setIndex,
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  const ctx = useFormikContext<Options>()
  React.useEffect(() => {
    if (!ctx.touched.intro) {
      setIndex(0)
    } else if (!ctx.touched.volume) {
      if (ctx.values.intro === "beschweigen") {
        ctx.submitForm()
      } else {
        setIndex(1)
      }
    } else if (!ctx.touched.tone) {
      setIndex(2)
    }
  }, [ctx.values, setIndex, ctx])
  return null
}

export default App

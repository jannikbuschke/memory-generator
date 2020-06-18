import React from "react"
import "./App.css"
import { Formik, useFormikContext } from "formik"
import { SubmitButton, Form, Radio, Slider } from "formik-antd"
import { RadioGroup } from "formik-antd/es/form-items"
import {
  BackgroundContainer,
  SilencePulse,
  SilencedBackgroundContainer,
} from "./silence"
import "antd/dist/antd.css"
import { Steps, notification, Button } from "antd"
import { Options, getText } from "./api"
import { Header } from "./header"
import styled from "styled-components"
import { ProgressBar, ButtonBar } from "./navigation"
import { Content } from "./content"
import { First } from "./form/1"

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
  const [text, setText] = React.useState("")
  return (
    <Container>
      <Formik<Options>
        initialValues={{ intro: "bereuen", tone: "ehren", volume: "ganz laut" }}
        onSubmit={async (values, f) => {
          f.setSubmitting(false)
          setSilence(values.intro === "beschweigen")
          const response = await getText(values)
          if (response.ok) {
            setText(response.data.text)
          } else {
            notification.error({ message: response.error })
          }
        }}
      >
        {(f) => (
          <Background>
            <Container>
              <Header />
              {/* <div>
              <div dangerouslySetInnerHTML={{ __html: text }} />
            </div> */}
              <Content />
              <div>
                <Form colon={false}>
                  {/* <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    >
                    <Back index={index} setIndex={setIndex} />
                    <Forward index={index} setIndex={setIndex} />
                  </div> */}
                  <AutoStep setIndex={setIndex} />
                </Form>
              </div>
              <div>
                <ProgressBar />
                <ButtonBar />
              </div>
            </Container>
          </Background>
        )}
      </Formik>
      {silence && <SilencePulse />}
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
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

function Forward({
  index,
  setIndex,
}: {
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  return index === 2 ? (
    <SubmitButton style={{ marginTop: 10 }}>Starten</SubmitButton>
  ) : (
    <Button onClick={() => setIndex(index + 1)}>Weiter</Button>
  )
}

function Back({
  index,
  setIndex,
}: {
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  return index === 0 ? (
    <div />
  ) : (
    <Button onClick={() => setIndex(index - 1)}>Zurück</Button>
  )
}

export default App

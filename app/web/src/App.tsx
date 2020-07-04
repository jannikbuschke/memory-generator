import React from "react"
import "./App.css"
import { Formik, useFormikContext } from "formik"
import { Form } from "formik-antd"
import {
  BackgroundContainer,
  SilencePulse,
  SilencedBackgroundContainer,
} from "./pages/silence"
import "antd/dist/antd.css"
import { notification, Spin, Button } from "antd"
import { Options, getText } from "./api"
import { Header } from "./header"
import styled from "styled-components"
import { NavigationProvider } from "./navigation/navigation"
import { Content } from "./navigation/content"
import { Container, ContentContainer } from "./layout"
import { ButtonBar } from "./navigation/button-bar"
import { pages } from "./pages"

let vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document

function App() {
  const [silence, setSilence] = React.useState(false)
  const Background = silence ? SilencedBackgroundContainer : BackgroundContainer
  React.useEffect(() => {
    if (silence) {
      setTimeout(() => {
        setSilence(false)
      }, 20000)
    }
  }, [silence])
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
  }, [])
  const [text, setText] = React.useState<string | null>(null)
  return (
    <div style={{ height: "calc(var(--vh,1vh)*100" }}>
      <NavigationProvider
        text={text}
        pages={pages}
        defaultContainer={DefaultContentContainer}
      >
        <Formik<Options>
          initialValues={{ intro: null, tone: null, volume: null }}
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
              size="large"
              style={{ maxHeight: "100vh" }}
            >
              <Form>
                <RootContainer>
                  <Background>
                    <Header />
                    <Content />
                    <ButtonBar />
                  </Background>
                </RootContainer>
              </Form>
            </Spin>
          )}
        </Formik>
        {silence && <SilencePulse />}
      </NavigationProvider>
    </div>
  )
}

const DefaultContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const RootContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
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

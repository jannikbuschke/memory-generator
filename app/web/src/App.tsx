import React from "react"
import "./App.css"
import { Formik } from "formik"
import { Form } from "formik-antd"
import {
  BackgroundContainer,
  SilencePulse,
  SilencedBackgroundContainer,
} from "./pages/silence"
import "antd/dist/antd.css"
import { notification, Spin } from "antd"
import { Options, getText } from "./api"
import { Header } from "./header"
import styled from "styled-components"
import { NavigationProvider } from "./navigation/navigation"
import { Content as Page } from "./navigation/content"
import { Container } from "./layout"
import { ButtonBar } from "./navigation/button-bar"
import { pages } from "./pages"

const vh = window.innerHeight * 0.01

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
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
  }, [])
  const [text, setText] = React.useState<string | null>(null)
  return (
    <RootContainer>
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
              style={{ height: "100%" }}
              wrapperClassName="spin"
            >
              <Form style={{ height: "100%" }}>
                <Background>
                  <PageContainer>
                    <Header />
                    <Page />
                    <ButtonBar />
                  </PageContainer>
                </Background>
              </Form>
            </Spin>
          )}
        </Formik>
        {silence && <SilencePulse />}
      </NavigationProvider>
    </RootContainer>
  )
}

const PageContainer = styled(Container)`
  height: calc(var(--vh, 1vh) * 100);
`

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
`

export default App

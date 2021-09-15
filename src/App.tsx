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
import { notification } from "antd"
import { Options, getText } from "./api"
import { Header } from "./header"
import styled from "styled-components"
import { NavigationProvider, useNavigation } from "./navigation/navigation"
import { Content as Page } from "./navigation/content"
import { Container } from "./layout"
import { ButtonBar } from "./navigation/button-bar"
import { pages } from "./pages"

function App() {
  const [silence, setSilence] = React.useState(false)
  const Background = silence ? SilencedBackgroundContainer : BackgroundContainer

  React.useEffect(() => {
    const vh = window.innerHeight
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    window.addEventListener("resize", () => {
      const vh = window.innerHeight
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
          onReset={() => {
            setSilence(false)
          }}
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
            <Form style={{ height: "100%" }}>
              <Background>
                <PageContainer>
                  <Header />
                  <Page />
                  <ButtonBar />
                </PageContainer>
                <ResetAfterSilence silence={silence} />
              </Background>
              {silence && <SilencePulse />}
            </Form>
          )}
        </Formik>
      </NavigationProvider>
    </RootContainer>
  )
}

function ResetAfterSilence({ silence }: { silence: boolean }) {
  const { resetForm } = useFormikContext()
  const { navigate } = useNavigation()
  const [isActive, setIsActive] = React.useState(true)
  React.useEffect(() => {
    if (silence) {
      setIsActive(false)
    } else if (!silence && isActive) {
      resetForm()
      navigate("landing")
    }
  }, [silence, isActive, resetForm, navigate])
  return null
}

const PageContainer = styled(Container)`
  height: var(--vh, 1vh);
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

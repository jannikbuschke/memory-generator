import React from "react"
import "./App.css"
import { Formik } from "formik"
import { SubmitButton, Form, Radio, Slider } from "formik-antd"
import { RadioGroup } from "formik-antd/es/form-items"
import {
  BackgroundContainer,
  SilencePulse,
  SilencedBackgroundContainer,
} from "./silence"
import "antd/dist/antd.css"

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
  return (
    <div>
      <Formik
        initialValues={{ volume: 50, remember: null, remembrance: null }}
        onSubmit={(values, f) => {
          f.setSubmitting(false)
          setSilence(values.remember === "beschweigen")
        }}
      >
        {(f) => (
          <Background>
            <div className="App">
              <div>ERINNERUNG</div>
              <div>GENERIEREN</div>
              <div>LEBENDIG</div>
              <div>GEDENKEN</div>
              <br />
              <br />
              <div style={{ padding: "20px" }}>
                <Form colon={false}>
                  <RadioGroup name="remember" size="large">
                    <Radio.Button name="remember" value="trauern">
                      Trauern
                    </Radio.Button>
                    <Radio.Button name="remember" value="gedenken">
                      Gedenken
                    </Radio.Button>
                    <Radio.Button name="remember" value="bereuen">
                      Bereuen
                    </Radio.Button>
                    <Radio.Button name="remember" value="verachten">
                      Verachten
                    </Radio.Button>
                    <Radio.Button name="remember" value="beschweigen">
                      Beschweigen
                    </Radio.Button>
                  </RadioGroup>
                  <Form.Item name="volume">
                    <Slider
                      disabled={f.values.remember === "beschweigen"}
                      name="volume"
                      marks={{ 0: "Leise", 100: "Laut" }}
                      tooltipVisible={false}
                    />
                  </Form.Item>
                  <RadioGroup
                    name="remembrance"
                    size="large"
                    disabled={f.values.remember === "beschweigen"}
                  >
                    <Radio.Button name="remembrance" value="gedenken">
                      Gedenken
                    </Radio.Button>
                    <Radio.Button name="remembrance" value="ehren">
                      Ehren
                    </Radio.Button>
                    <Radio.Button name="remembrance" value="mahnen">
                      Mahnen
                    </Radio.Button>
                  </RadioGroup>
                  <SubmitButton style={{ marginTop: 10 }}>Starten</SubmitButton>
                </Form>
              </div>
            </div>
          </Background>
        )}
      </Formik>
      {silence && <SilencePulse />}
    </div>
  )
}

export default App

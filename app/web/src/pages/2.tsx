import * as React from "react"
import { RadioGroup } from "formik-antd/es/form-items"
import { Radio, Form, Slider } from "formik-antd"
import { useFormikContext } from "formik"
import { Question } from "./question"
// "still" | "mittel" | "laut" | "ganz laut"
export function Second() {
  const ctx = useFormikContext<any>()
  return (
    <>
      <Question>Wie willst du an die Geschichte erinnern?</Question>

      <RadioGroup name="volume" size="large">
        <Radio.Button name="volume" value="still">
          Still
        </Radio.Button>
        <Radio.Button name="volume" value="mittel">
          Bewegt
        </Radio.Button>
        <Radio.Button name="volume" value="laut">
          Ergriffen
        </Radio.Button>
        <Radio.Button name="volume" value="ganz laut">
          Impulsiv
        </Radio.Button>
      </RadioGroup>
      {/* <Form.Item name="volume">
        <Slider
          disabled={ctx.values.intro === "beschweigen"}
          name="volume"
          marks={{ 0: "Leise", 100: "Laut" }}
          tooltipVisible={false}
        /> 
      </Form.Item>*/}
    </>
  )
}
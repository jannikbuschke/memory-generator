import * as React from "react"
import { RadioGroup } from "formik-antd/es/form-items"
import { Radio, Form, Slider } from "formik-antd"
import { useFormikContext } from "formik"
import { Question } from "./1"

export function Second() {
  const ctx = useFormikContext<any>()
  return (
    <div>
      <Question>Wie willst du an die Geschichte erinnern?</Question>

      <Form.Item name="volume">
        <Slider
          disabled={ctx.values.intro === "beschweigen"}
          name="volume"
          marks={{ 0: "Leise", 100: "Laut" }}
          tooltipVisible={false}
        />
      </Form.Item>
    </div>
  )
}

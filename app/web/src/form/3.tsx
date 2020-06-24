import * as React from "react"
import { RadioGroup } from "formik-antd/es/form-items"
import { Radio, SubmitButton } from "formik-antd"
import { useFormikContext } from "formik"
import { Question } from "./question"

export function Third() {
  const ctx = useFormikContext<any>()

  return (
    <>
      <Question>Was beabsichtigst du mit deiner Erinnerung?</Question>
      <RadioGroup
        name="tone"
        size="large"
        disabled={ctx.values.intro === "beschweigen"}
      >
        <Radio.Button name="tone" value="gedenken">
          Gedenken
        </Radio.Button>
        <Radio.Button name="tone" value="ehren">
          Ehren
        </Radio.Button>
        <Radio.Button name="tone" value="mahnen">
          Mahnen
        </Radio.Button>
      </RadioGroup>
    </>
  )
}

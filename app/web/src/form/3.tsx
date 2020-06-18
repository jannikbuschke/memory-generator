import * as React from "react"
import { RadioGroup } from "formik-antd/es/form-items"
import { Radio } from "formik-antd"
import { useFormikContext } from "formik"
import { Question } from "./1"

export function Third() {
  const ctx = useFormikContext<any>()

  return (
    <div>
      <Question>Was beabsichtigst du mit deiner Erinnerung?</Question>
      <RadioGroup
        name="remembrance"
        size="large"
        disabled={ctx.values.intro === "beschweigen"}
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
    </div>
  )
}

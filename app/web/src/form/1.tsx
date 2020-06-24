import * as React from "react"
import { RadioGroup } from "formik-antd/es/form-items"
import { Radio } from "formik-antd"
import { Question } from "./question"

export function First() {
  return (
    <>
      <Question>Wie verhältst du dich zur Geschichte?</Question>
      <RadioGroup name="intro" size="large">
        <Radio.Button name="intro" value="trauern">
          Trauern
        </Radio.Button>
        <Radio.Button name="intro" value="gedenken">
          Gedenken
        </Radio.Button>
        <Radio.Button name="intro" value="bereuen">
          Bereuen
        </Radio.Button>
        <Radio.Button name="intro" value="verachten">
          Verachten
        </Radio.Button>
        <Radio.Button name="intro" value="beschweigen">
          Beschweigen
        </Radio.Button>
      </RadioGroup>
    </>
  )
}

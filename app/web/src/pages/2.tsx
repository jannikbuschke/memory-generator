import * as React from "react"
import { RadioGroup } from "formik-antd/es/form-items"
import { Radio, Form, Slider } from "formik-antd"
import { useFormikContext } from "formik"
import { Question } from "./question"
// "still" | "mittel" | "laut" | "ganz laut"

export function mapVolume(volume: "still" | "mittel" | "laut" | "ganz laut") {
  switch (volume) {
    case "still":
      return "STILL"
    case "mittel":
      return "BEWEGT"
    case "laut":
      return "ERGRIFFEN"
    case "ganz laut":
      return "IMPULSIV"
  }
}

export function Second() {
  const ctx = useFormikContext<any>()
  return (
    <>
      <Question>Wie willst du an die Geschichte erinnern?</Question>

      <RadioGroup name="volume" size="large">
        <Radio.Button name="volume" value="still">
          {mapVolume("still")}
        </Radio.Button>
        <Radio.Button name="volume" value="mittel">
          {mapVolume("mittel")}
        </Radio.Button>
        <Radio.Button name="volume" value="laut">
          {mapVolume("laut")}
        </Radio.Button>
        <Radio.Button name="volume" value="ganz laut">
          {mapVolume("ganz laut")}
        </Radio.Button>
      </RadioGroup>
    </>
  )
}

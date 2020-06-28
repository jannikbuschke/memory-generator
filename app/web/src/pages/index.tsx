import * as React from "react"
import styled from "styled-components"
import { IntroText } from "../pages/intro"
import { Info } from "../pages/info"
import { First } from "../pages/1"
import { Second } from "../pages/2"
import { Third } from "../pages/3"
import { Result } from "../pages/result"
import { IntroVideo } from "../pages/landing-page"
import { Pages } from "../navigation/navigation"
import { Intro2 } from "./intro-2"
import { Container } from "../layout"
import { Project } from "./project"
import { History } from "./history"

const NoContainer = styled(Container)``

export const pages: Pages = {
  landing: {
    name: "landing",
    Content: <IntroVideo />,
    previous: { page: "info", title: "Info" },
    next: { page: "intro1", title: "INTRO" },
  },
  intro1: {
    name: "intro1",
    Content: <IntroText />,
    previous: { page: "landing", title: "Landing" },
    next: { page: "intro2", title: "Weiter" },
  },
  intro2: {
    name: "intro2",
    Content: <Intro2 />,
    previous: { page: "intro1", title: "Zurück" },
    next: { page: "first", title: "Start" },
  },
  info: {
    name: "info",
    Content: <Info />,
    previous: { page: "landing", title: "Zurück" },
    container: NoContainer,
  },
  first: {
    name: "first",
    Content: <First />,
    next: { page: "second", title: "Weiter" },
    previous: { page: "intro2", title: "Zurück" },
    progress: 0,
  },
  second: {
    name: "second",
    Content: <Second />,
    next: { page: "third", title: "Weiter" },
    previous: { page: "first", title: "Zurück" },
    progress: 1,
  },
  third: {
    name: "third",
    Content: <Third />,
    previous: { page: "second", title: "Zurück" },
    next: {
      page: "result",
      title: "Erinnerung generieren",
      props: { type: "primary" },
    },
    progress: 2,
  },
  result: {
    name: "result",
    Content: <Result />,
  },
  project: {
    name: "project",
    Content: <Project />,
    previous: { page: "result", title: "Zurück" },
  },
  history: {
    name: "history",
    Content: <History />,
    previous: { page: "result", title: "Zurück" },
  },
} as Pages

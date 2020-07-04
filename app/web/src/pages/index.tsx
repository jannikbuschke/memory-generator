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
import { Container } from "../layout"
import { Project } from "./project"
import { History } from "./history"
import { CaretRightFilled, CaretLeftFilled } from "@ant-design/icons"

const NoContainer = styled(Container)``

const nextProps = {
  icon: <CaretRightFilled style={{ fontSize: "2em" }} />,
}

const prevProps = {
  icon: <CaretLeftFilled style={{ fontSize: "2em" }} />,
}

export const pages: Pages = {
  landing: {
    name: "landing",
    Content: <IntroVideo />,
    previous: { page: "info", title: "Info" },
    next: {
      page: "intro1",
      props: nextProps,
    },
  },
  intro1: {
    name: "intro1",
    Content: <IntroText />,
    previous: { page: "landing", props: prevProps },
    next: { page: "first", props: nextProps },
  },
  // intro2: {
  //   name: "intro2",
  //   Content: <Intro2 />,
  //   previous: { page: "intro1", title: "Zurück" },
  //   next: { page: "first", title: "Start" },
  // },
  info: {
    name: "info",
    Content: <Info />,
    previous: { page: "landing", props: prevProps },
    container: NoContainer,
  },
  first: {
    name: "first",
    Content: <First />,
    next: { page: "second", props: nextProps },
    previous: { page: "intro1", props: prevProps },
    progress: 0,
  },
  second: {
    name: "second",
    Content: <Second />,
    next: { page: "third", props: nextProps },
    previous: { page: "first", props: prevProps },
    progress: 1,
  },
  third: {
    name: "third",
    Content: <Third />,
    previous: { page: "second", props: prevProps },
    next: {
      page: "result",
      title: "Erinnerung generieren",
      props: {
        type: "primary",
        style: { width: "15em", height: "5em", fontSize: "1.3em" },
      },
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

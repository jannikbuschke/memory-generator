import * as React from "react"
import { Steps, Button, notification } from "antd"
import styled from "styled-components"
import { IntroVideo, IntroText } from "./intro"
import { Info } from "./info"
import { First } from "./form/1"
import { Second } from "./form/2"
import { Third } from "./form/3"

interface Page {
  name: string
  progress?: number
  Content: any
  next?: { page: string; title: string }
  previous?: { page: string; title: string }
}

const pages: { [name: string]: Page } = {
  landing: {
    name: "landing",
    Content: <IntroVideo />,
    next: { page: "intro", title: "INTRO" },
  },
  intro: {
    name: "intro",
    Content: <IntroText />,
    previous: { page: "info", title: "Info" },
    next: { page: "first", title: "Start" },
  },
  info: {
    name: "info",
    Content: <Info />,
    previous: { page: "intro", title: "Zurück" },
  },
  first: {
    name: "first",
    Content: <First />,
    next: { page: "second", title: "Weiter" },
    previous: { page: "intro", title: "Zurück" },
  },
  second: {
    name: "second",
    Content: <Second />,
    next: { page: "third", title: "Weiter" },
    previous: { page: "first", title: "Zurück" },
  },
  third: {
    name: "third",
    Content: <Third />,
    next: { page: "second", title: "STARTEN" },
    previous: { page: "second", title: "Zurück" },
  },
}

interface INavigationContext {
  currentPage: Page
  navigate: (page: string) => void
}

export const NavigationContext = React.createContext<INavigationContext>(
  null as any,
)

export function useNavigation() {
  const ctx = React.useContext(NavigationContext)
  if (!ctx) {
    throw new Error("Cannot useNavigation outside of NavigationProvider")
  }
  return ctx
}

export function NavigationProvider({ children }: React.PropsWithChildren<{}>) {
  const [page, setPage] = React.useState<Page>(pages["landing"])

  return (
    <NavigationContext.Provider
      value={{
        currentPage: page,
        navigate: (page) => {
          const next = pages[page]
          if (!next) {
            notification.error({ message: `Page '${page}' not found` })
          } else {
            setPage(next)
          }
        },
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

const { Step } = Steps

export function ProgressBar() {
  const ctx = useNavigation()
  return ctx.currentPage.progress !== undefined ? (
    <Steps progressDot={true} current={ctx.currentPage.progress}>
      <Step />
      <Step />
      <Step />
      <Step />
    </Steps>
  ) : null
}

export function ButtonBar() {
  const {
    navigate,
    currentPage: { next, previous },
  } = useNavigation()

  return (
    <Bar>
      {previous ? (
        <Button size="large" onClick={() => navigate(previous.page)}>
          {previous.title}
        </Button>
      ) : (
        <div>no button</div>
      )}
      {next ? (
        <Button size="large" onClick={() => navigate(next.page)}>
          {next.title}
        </Button>
      ) : (
        <div>no button</div>
      )}
    </Bar>
  )
}

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

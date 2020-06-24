import * as React from "react"
import { Steps, Button, notification } from "antd"
import styled from "styled-components"
import { IntroVideo, IntroText } from "./intro"
import { Info } from "./info"
import { First } from "./form/1"
import { Second } from "./form/2"
import { Third } from "./form/3"
import { ButtonProps } from "antd/lib/button"
import { Result } from "./form/result"

interface Page {
  name: string
  progress?: number
  Content: any
  next?: ActionProps
  previous?: ActionProps
}

interface ActionProps {
  page: string
  title: string
  props?: ButtonProps
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
} as { [name: string]: Page }

interface INavigationContext {
  text: string | null
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

export function NavigationProvider({
  children,
  text,
}: React.PropsWithChildren<{ text: string | null }>) {
  const [page, setPage] = React.useState<Page>(pages["landing"])

  return (
    <NavigationContext.Provider
      value={{
        text,
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
    <Steps
      progressDot={true}
      current={ctx.currentPage.progress}
      style={{ marginTop: 5 }}
    >
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
    currentPage: { next, previous, name },
  } = useNavigation()

  return (
    <Bar>
      {previous ? (
        <Button
          size="large"
          onClick={() => navigate(previous.page)}
          {...previous.props}
        >
          {previous.title}
        </Button>
      ) : (
        <div></div>
      )}
      {next ? (
        <div style={{ marginRight: 140 }}>
          <Button
            size="large"
            onClick={() => navigate(next.page)}
            {...next.props}
          >
            {next.title}
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </Bar>
  )
}

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

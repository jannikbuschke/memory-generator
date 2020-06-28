import * as React from "react"
import { Steps, notification } from "antd"

import { ButtonProps } from "antd/lib/button"

export interface Page {
  name: string
  progress?: number
  Content: any
  next?: ActionProps
  previous?: ActionProps
  container?: any
}

export interface ActionProps {
  page: string
  title: string
  props?: ButtonProps
}

interface INavigationContext {
  text: string | null
  currentPage: Page
  navigate: (page: string) => void
  defaultContainer: any
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

export interface Pages {
  [name: string]: Page
}

export function NavigationProvider({
  children,
  text,
  pages,
  defaultContainer,
}: React.PropsWithChildren<{
  text: string | null
  pages: Pages
  defaultContainer: any
}>) {
  const [page, setPage] = React.useState<Page>(pages["landing"])

  const Container = page.container ? page.container : defaultContainer

  return (
    <NavigationContext.Provider
      value={{
        defaultContainer,
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

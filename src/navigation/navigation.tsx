import * as React from "react"
import { Steps, notification } from "antd"

import { ButtonProps } from "antd/lib/button"

export interface Page {
  name: string
  progress?: number
  Content: any
  next?: ActionProps
  showNext?: boolean
  previous?: ActionProps
  container?: any
}

export interface ActionProps {
  page: string
  title?: string
  props?: ButtonProps
}

interface INavigationContext {
  text: string | null
  currentPage: Page
  navigate: (page: string) => void
  defaultContainer: any
  next: () => void
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

  const navigate = React.useCallback(
    (page: string) => {
      const next = pages[page]
      if (!next) {
        notification.error({ message: `Page '${page}' not found` })
      } else {
        setPage(next)
      }
    },
    [pages],
  )

  return (
    <NavigationContext.Provider
      value={{
        next: () => {
          const nextPage = page.next?.page
          if (!nextPage) {
            notification.error({ message: `There is no next page` })
          } else {
            const next = pages[nextPage]
            if (!next) {
              notification.error({ message: `Page '${page}' not found` })
            } else {
              setPage(next)
            }
          }
        },
        defaultContainer,
        text,
        currentPage: page,
        navigate,
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

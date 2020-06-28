import * as React from "react"
import { useFormikContext } from "formik"
import { useNavigation } from "../navigation/navigation"
import styled from "styled-components"
import { Button, Space, Popover } from "antd"
import { ButtonProps } from "antd/lib/button"
import { CaretRightFilled, ShareAltOutlined } from "@ant-design/icons"

export function Result() {
  const { text } = useNavigation()
  const ctx = useFormikContext()
  React.useEffect(() => {
    if (text === null) {
      ctx.submitForm()
    }
  }, [text])
  return text === null ? null : (
    <div>
      <div
        style={{ fontSize: "1.4rem", maxWidth: 500 }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <br />
      <br />
      <br />
      <br />

      <ActionContainer direction="vertical">
        <Share />
        <Action page="statistics">
          Statistiken ansehen <CaretRightFilled />
        </Action>
        <Action page="history">
          Mehr über die Geschichte des Lagerhaus G erfahren <CaretRightFilled />
        </Action>
        <Action page="project">
          Mehr über die Hintergründe des Projektes lesen <CaretRightFilled />
        </Action>
        <Action page="landing">
          Nochmal von vorne <CaretRightFilled />
        </Action>
      </ActionContainer>
    </div>
  )
}

const Share = () => {
  return (
    <Popover
      trigger="click"
      content={
        <div>
          <div>
            <a
              href="whatsapp://send?text=The text to share!"
              target="_blank"
              data-action="share/whatsapp/share"
            >
              Share via Whatsapp
            </a>
          </div>
          <div>
            <a href="mailto:?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/">
              Email
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/intent/tweet?text=optional%20promo%20text%20http://example.com/foo.htm?bar=123&baz=456"
              target="_blank"
            >
              Tweet
            </a>
          </div>
        </div>
      }
    >
      <Button style={{ border: "none" }} size="large">
        Generierten Text teilen oder speichern <ShareAltOutlined />
      </Button>
    </Popover>
  )
}

const Action = ({ page, ...rest }: { page: string } & ButtonProps) => {
  const { navigate } = useNavigation()

  return (
    <Button
      size="large"
      style={{ border: "none" }}
      onClick={() => navigate(page)}
      {...rest}
    />
  )
}
const ActionContainer = styled(Space)`
  align-items: flex-end;
  display: flex;
`

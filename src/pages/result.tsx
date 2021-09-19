import * as React from "react"
import { useFormikContext } from "formik"
import { useNavigation } from "../navigation/navigation"
import styled from "styled-components"
import { Space, Popover, Alert, Spin } from "antd"
import { ButtonProps } from "antd/lib/button"
import { CaretRightFilled as AntCaretRightFilled } from "@ant-design/icons"
import { ContentContainer } from "../layout"

const sample =
  'Mit dem Wahlsieg der Nationalsozialisten 1933 bereitete sich auch der Hamburger Hafen auf den bevorstehenden Krieg vor. Einige Jahre später erweiterte das Konzentrationslagers Neuengamme seine Kapazitäten zur Unterbringung von Häftlingen. Um die 85 Außenlager wurden infolgedessen errichtet. Sie erstreckten sich von Bad Sassendorf (Nordrhein-Westfalen) bis an die dänische Grenze. Das Lagerhaus G wurde ebenfalls in ein Häftlingslager umgewandelt, unter dem Namen Außenlager Dessauer Ufer. Es war neben dem Außenlager Hamburg Spaldingstraße das zweitgrößte innerstädtische Außenlager des KZ Neuengamme. Zwischen Juli 1944 und April 1945 wurden im Lagerhaus G circa 3500 Häftlinge untergebracht. Darunter waren schätzungsweise 1000 Frauen aus Ungarn und Tschechien, die aus dem Konzentrationslager Auschwitz nach Hamburg gebracht wurden, und circa 500 weibliche KZ-Inhaftierte aus dem Ghetto im polnischen Łódź, die als Jüdinnen verfolgt wurden. Zudem waren ungefähr 2000 Männer, die zuvor in dem sogenannten Stammlager in Neuengamme untergebracht waren, hier untergebracht. Sie wurden im September 1944 in in andere Außenlager (Neugraben, Wedel, Sasel) überführt. Weitere 2000 männliche KZ-Inhaftierte kamen anschließend in das Außenlager Dessauer Ufer. Das sogenannte Geilenberg-Programm sah vor, dass alle hier untergebrachten Häftlinge Zwangsarbeit verrichten mussten. Die Frauen mussten in umliegenden Öl-Raffinerien Aufräumungsarbeiten leisten. Die Männer mussten neben Aufräumungsarbeiten beim Gleis- und Panzergrabenbau arbeiten. Im Herbst 1944 starben ungefähr 150 Inhaftierte durch eine Bombe, die Haus 1 traf. Das Außenlager musste aufgrund des Gebäudeschadens geräumt werden. Danach wurden die Inhaftierten in ein anderes Außenlager in Fuhlsbüttel verlegt. Im April 1945 wurde das Außenlager Dessauer Ufer endgültig geräumt. Die Überlebenden wurden in andere Lager überführt. Die Frauen erlebten schließlich ihre Befreiung im KZ Bergen-Belsen, die Männer im Kriegsgefangenen- und "Auffanglager" Sandbostel.'

export function Result() {
  const { text } = useNavigation()
  const ctx = useFormikContext()

  const [checkDelay, setCheckDelay] = React.useState(0)
  const [delay, setDelay] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (checkDelay !== 0 && ctx.isSubmitting) {
      setDelay(true)
    }
  }, [checkDelay, ctx.isSubmitting])
  React.useEffect(() => {
    setTimeout(() => setCheckDelay(Math.random()), 3500)
  }, [ctx, ctx.isSubmitting])
  return (
    <Spin
      spinning={ctx.isSubmitting}
      tip={
        delay
          ? "Einen Moment dauert es noch. Deine Erinnerung wird generiert..."
          : undefined
      }
      size="large"
      style={{ height: "100%" }}
      wrapperClassName="spin"
    >
      <ContentContainer>
        {text === null && !ctx.isSubmitting && (
          <Alert
            type="warning"
            message="Leider konnte der Text nicht generiert werden. Es wird ein Beispieltext angezeigt"
          />
        )}
        <div
          style={{ fontSize: "1.2rem", maxWidth: 500, color: "black" }}
          dangerouslySetInnerHTML={{
            __html: ctx.isSubmitting ? "" : text || sample,
          }}
        />
        <br />
        <br />
        <br />
        <br />

        {!ctx.isSubmitting && (
          <ActionContainer direction="vertical" size="large">
            <Share text={text || sample} />
            <Action page="history">
              <div style={{ textAlign: "right" }}>Recherchelinks </div>
              <CaretRightFilled />
            </Action>
            <Action page="project">
              <div style={{ textAlign: "right" }}>Mehr zum Projekt </div>
              <CaretRightFilled />
            </Action>
            <Action page="first">
              <div>Nochmal von vorne</div>
              <CaretRightFilled />
            </Action>
          </ActionContainer>
        )}
      </ContentContainer>
    </Spin>
  )
}

const CaretRightFilled = styled(AntCaretRightFilled)`
  font-size: 20px;
  margin-left: 4px;
`

const newLine = "%0D%0A"
const space = "%20"

const Share = ({ text }: { text: string }) => {
  return (
    <Popover
      trigger="click"
      content={
        <div>
          <div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`mailto:?subject=Ein${space}generierter${space}Erinnerungstext&body=${text}${newLine}${newLine}http://www.Erinnerungsgenerator.de`}
            >
              Email
            </a>
          </div>
          <div>
            <a
              href={`whatsapp://send?text=${text}${newLine}${newLine}http://www.Erinnerungsgenerator.de`}
              target="_blank"
              rel="noopener noreferrer"
              data-action="share/whatsapp/share"
            >
              Whatsapp
            </a>
          </div>
          {/* <div>
            <a
              href={`https://twitter.com/intent/tweet?text=Ein${space}generierter${space}Erinnerungstext${newLine}${newLine}http://www.Erinnerungsgenerator.de`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Tweet
            </a>
          </div> */}
        </div>
      }
    >
      <Btn>
        Erinnerung an mich senden <CaretRightFilled />
      </Btn>
    </Popover>
  )
}

const Action = ({ page, ...rest }: { page: string } & ButtonProps) => {
  const { navigate } = useNavigation()

  return <Btn onClick={() => navigate(page)}>{rest.children}</Btn>
}

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
  }
`

const ActionContainer = styled(Space)`
  margin: 20px;
  align-items: flex-end;
  display: flex;
`

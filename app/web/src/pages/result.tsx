import * as React from "react"
import { useFormikContext } from "formik"
import { useNavigation } from "../navigation/navigation"
import styled from "styled-components"
import { Button, Space, Popover, Alert } from "antd"
import { ButtonProps } from "antd/lib/button"
import { CaretRightFilled, ShareAltOutlined } from "@ant-design/icons"

const sample =
  'Mit dem Wahlsieg der Nationalsozialisten 1933 bereitete sich auch der Hamburger Hafen auf den bevorstehenden Krieg vor. Einige Jahre später erweiterte das Konzentrationslagers Neuengamme seine Kapazitäten zur Unterbringung von Häftlingen. Um die 85 Außenlager wurden infolgedessen errichtet. Sie erstreckten sich von Bad Sassendorf (Nordrhein-Westfalen) bis an die dänische Grenze. Das Lagerhaus G wurde ebenfalls in ein Häftlingslager umgewandelt, unter dem Namen Außenlager Dessauer Ufer. Es war neben dem Außenlager Hamburg Spaldingstraße das zweitgrößte innerstädtische Außenlager des KZ Neuengamme. Zwischen Juli 1944 und April 1945 wurden im Lagerhaus G circa 3500 Häftlinge untergebracht. Darunter waren schätzungsweise 1000 Frauen aus Ungarn und Tschechien, die aus dem Konzentrationslager Auschwitz nach Hamburg gebracht wurden, und circa 500 weibliche KZ-Inhaftierte aus dem Ghetto im polnischen Łódź, die als Jüdinnen verfolgt wurden. Zudem waren ungefähr 2000 Männer, die zuvor in dem sogenannten Stammlager in Neuengamme untergebracht waren, hier untergebracht. Sie wurden im September 1944 in in andere Außenlager (Neugraben, Wedel, Sasel) überführt. Weitere 2000 männliche KZ-Inhaftierte kamen anschließend in das Außenlager Dessauer Ufer. Das sogenannte Geilenberg-Programm sah vor, dass alle hier untergebrachten Häftlinge Zwangsarbeit verrichten mussten. Die Frauen mussten in umliegenden Öl-Raffinerien Aufräumungsarbeiten leisten. Die Männer mussten neben Aufräumungsarbeiten beim Gleis- und Panzergrabenbau arbeiten. Im Herbst 1944 starben ungefähr 150 Inhaftierte durch eine Bombe, die Haus 1 traf. Das Außenlager musste aufgrund des Gebäudeschadens geräumt werden. Danach wurden die Inhaftierten in ein anderes Außenlager in Fuhlsbüttel verlegt. Im April 1945 wurde das Außenlager Dessauer Ufer endgültig geräumt. Die Überlebenden wurden in andere Lager überführt. Die Frauen erlebten schließlich ihre Befreiung im KZ Bergen-Belsen, die Männer im Kriegsgefangenen- und "Auffanglager" Sandbostel.'

export function Result() {
  const { text } = useNavigation()
  const ctx = useFormikContext()
  React.useEffect(() => {
    if (text === null) {
      ctx.submitForm()
    }
  }, [text])
  return (
    <div>
      {text && !ctx.isSubmitting === null && (
        <Alert
          type="warning"
          message="Leider konnte der Text nicht generiert werden. Es wird ein Beispieltext angezeigt"
        />
      )}
      <div
        style={{ fontSize: "1.4rem", maxWidth: 500 }}
        dangerouslySetInnerHTML={{ __html: text || sample }}
      />
      <br />
      <br />
      <br />
      <br />

      <ActionContainer direction="vertical">
        <Share text={text || sample} />
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
              href={`whatsapp://send?text=${text}${newLine}${newLine}http://www.Erinnerungsgenerator.de`}
              target="_blank"
              data-action="share/whatsapp/share"
            >
              Share via Whatsapp
            </a>
          </div>
          <div>
            <a
              href={`mailto:?subject=Ein${space}generierter${space}Erinnerungstext&body=${text}${newLine}${newLine}http://www.Erinnerungsgenerator.de`}
            >
              Email
            </a>
          </div>
          <div>
            <a
              href={`https://twitter.com/intent/tweet?text=Ein${space}generierter${space}Erinnerungstext${newLine}${newLine}http://www.Erinnerungsgenerator.de`}
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

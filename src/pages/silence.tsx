import * as React from "react"
import styled, { keyframes } from "styled-components"
import { Container } from "../layout"
import { useFormikContext } from "formik"
import { useNavigation } from "../navigation/navigation"

const color = "rgba(10,10,10,0.4)"
const color2 = "rgba(10,10,10,0)"

const animation = keyframes`
    0% {
      box-shadow: 0 0 0 0 ${color};
    }
    100% {
        box-shadow: 0 0 0 80px ${color2};
    }
`

export function SilencePulse() {
  const ctx = useFormikContext()
  const { navigate } = useNavigation()
  return (
    <SilenceContainer
      onClick={() => {
        ctx.resetForm()
        navigate("first")
      }}
    >
      <Silence
        onClick={() => {
          ctx.resetForm()
          navigate("first")
        }}
      />
    </SilenceContainer>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
`

const SilenceContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 9s forwards 1s;
  &:hover {
    cursor: pointer;
  }
`

// const SilenceImg = styled.img`
// position: absolute;
// top: calc(50vh - 60px);
// left: calc(50vw - 60px);
// width: 120px;
// height: 120px;
// border-radius: 50%;
// background: black;
// box-shadow: 0 0 0 ${color};
// animation: ${animation} 3.5s infinite;
// `

export const Silence = styled.div`
  position: absolute;
  top: calc(50vh - 60px);
  left: calc(50vw - 60px);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: black;
  box-shadow: 0 0 0 ${color};
  animation: ${animation} 3.5s infinite;
`

const blurIn = keyframes`
  from {
    background-color: white;
    filter: blur(0px);
    opacity: 1;
  }

  to {
    filter: blur(100px);
    opacity: 0.9;
  }
`

export const SilencedBackgroundContainer = styled.div`
  animation: ${blurIn}};
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: .5s;
  height: 100%
`

export const BackgroundContainer = styled(Container)`
  height: 100%;
`

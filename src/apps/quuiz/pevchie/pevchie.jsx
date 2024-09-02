

import React from 'react'
import { Components } from '../../../components'
import Logo from "../../../assets/images/birds/4th/eb7faeb6f5a7db89ff9b3990bcc08a95.jpg"
import Audio from "../../../assets/songs/4th/gluhaya-kukushka-golos-1.mp3"
import Answers from '../../../pages/question/Answers'

export default function pevchie() {
  return (
    <React.Fragment>
      <Components.Headertop />
      <Components.Headerbottom />
      <Components.Birdssong audio={Audio} birds={Logo}/>
      <Answers goto={"/quiz/hishnye"} correct={"Кукушка"}/>
    </React.Fragment>
  )
}

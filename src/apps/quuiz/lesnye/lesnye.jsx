

import React from 'react'
import { Components } from '../../../components'
import Logo from "../../../assets/images/birds/3rd/Без названия.jpg"
import Audio from "../../../assets/songs/3rd/zelenaya-peresmeshka-golos-7.mp3"
import Answers from '../../../pages/question/Answers'

export default function lesnye() {
  return (
    <React.Fragment>
      <Components.Headertop />
      <Components.Headerbottom />
      <Components.Birdssong audio={Audio} birds={Logo}/>
      <Answers 
        goto={"/quiz/pevchie"} 
        correct={"Зеленая пересмешка"}
        info={<p>this is info</p>}
        audio={Audio}
        photo={Logo}
      />
    </React.Fragment>
  )
}

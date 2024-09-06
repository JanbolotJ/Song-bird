

import React from 'react'
import { Components } from '../../../components'
import Logo from "../../../assets/images/birds/1st/48803942053_f4f6e4fcfe_n.jpg"
import Audio from "../../../assets/songs/1st/straus-golos-1.mp3"
import Answers from '../../../pages/question/Answers'

export default function razminka() {
  return (
    <React.Fragment>
      <Components.Headertop />
      <Components.Headerbottom />
      <Components.Birdssong audio={Audio} birds={Logo}/>
      <Answers
       goto={"/quiz/vorobinye"} 
       correct={"Страус"} 
       info={<p>this is info for straus</p>}
       audio={Audio}
       photo={Logo}
      />
    </React.Fragment>
  )
}

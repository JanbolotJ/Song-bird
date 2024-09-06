

import React from 'react'
import { Components } from '../../../components'
import Logo from "../../../assets/images/birds/2nd/5165580695_e6482d3cc0_b.jpg"
import Audio from "../../../assets/songs/2nd/domovoy-vorobey-golos-1.mp3"
import Answers from '../../../pages/question/Answers'

export default function vorobinye() {
  return (
    <React.Fragment>
      <Components.Headertop />
      <Components.Headerbottom />
      <Components.Birdssong audio={Audio} birds={Logo}/>
      <Answers 
        goto={"/quiz/lesnye"} 
        correct={"Домовой воробей"}
        info={<p>this is info</p>}
        audio={Audio}
        photo={Logo}
      />
    </React.Fragment>
  )
}

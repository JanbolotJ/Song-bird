

import React from 'react'
import { Components } from '../../../components'
import Logo from "../../../assets/images/birds/5th/owl-tati-01.jpg"
import Audio from "../../../assets/songs/5th/belaya-sova-golos-2.mp3.crdownload"
import Answers from '../../../pages/question/Answers'

export default function hishnye() {
  return (
    <React.Fragment>
      <Components.Headertop />
      <Components.Headerbottom />
      <Components.Birdssong audio={Audio} birds={Logo}/>
      <Answers
       goto={"/quiz/morskie"} 
       correct={"Белая сова"}
       info={<p>this is info</p>}
       audio={Audio}
       photo={Logo}
      />  
    </React.Fragment>
  )
}

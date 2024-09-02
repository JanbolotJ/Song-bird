

import React from 'react'
import { Components } from '../../../components'
import Logo from "../../../assets/images/birds/6th/fronpic1.jpg"
import Audio from "../../../assets/songs/6th/morskaya-chayka-golos-3.mp3"
import Answers from '../../../pages/question/Answers'

export default function morskie() {
  return (
    <React.Fragment>
      <Components.Headertop />
      <Components.Headerbottom />
      <Components.Birdssong audio={Audio} birds={Logo}/>
      <Answers goto={"/results"} correct={"Морская чайка"}/>
    </React.Fragment>
  )
}

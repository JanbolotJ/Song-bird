

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
      <Components.Birdssong
       audio={Audio} 
       birds={Logo} 
       name={"Белая сова"}/>
      <Answers
       goto={"/quiz/morskie"} 
       correct={"Белая сова"}
       info={<p>
        Белая сова, или полярная сова, — это крупная птица, которая живет в холодных северных регионах, таких как Арктика. Она известна своим белым оперением, которое помогает ей маскироваться на снегу. У самцов оперение почти полностью белое, а у самок и молодых птиц есть темные пятна. Полярные совы охотятся в основном на мелких млекопитающих, таких как лемминги, но могут ловить и более крупную добычу. Эти совы активны и днем, в отличие от большинства других видов сов, и могут мигрировать на юг в поисках пищи, когда на севере становится трудно добывать пропитание.</p>}
       audio={Audio}
       photo={Logo}
      />  
    </React.Fragment>
  )
}

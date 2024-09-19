

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
      <Components.Birdssong
       audio={Audio} 
       birds={Logo} 
       name={"Домовой воробей"}/>
      <Answers 
        goto={"/quiz/lesnye"} 
        correct={"Домовой воробей"}
        info={<p>
          Домовой воробей — это маленькая и очень распространенная птица, которую можно встретить почти по всему миру. Воробьи часто живут рядом с людьми, гнездятся на зданиях и в городах. Они серо-коричневого цвета, с более яркими отметинами у самцов. Воробьи питаются семенами, крошками и насекомыми, а также любят подбирать остатки пищи, оставленные человеком. Эти птицы очень выносливы и хорошо приспосабливаются к разным условиям, что позволяет им жить в самых разных местах, от сельской местности до больших городов.</p>}
        audio={Audio}
        photo={Logo}
      />
    </React.Fragment>
  )
}

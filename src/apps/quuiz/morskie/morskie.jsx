

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
      <Components.Birdssong
       audio={Audio} 
       birds={Logo} 
       name={"Морская чайка"}/>
      <Answers 
        goto={"/results"} 
        correct={"Морская чайка"}
        info={<p>
          Морская чайка — это крупная птица, которая живет у побережий, на островах и вблизи водоемов. Она легко узнаваема по белому и серому оперению, черным крыльям и желтому клюву с красным пятном на конце. Морские чайки — всеядные птицы: они ловят рыбу, поедают остатки пищи, могут питаться мелкими животными и даже мусором. Эти птицы известны своим умением адаптироваться к разным условиям и могут жить как в дикой природе, так и в городах. Чайки — отличные летуны и нередко путешествуют на большие расстояния вдоль берегов в поисках пищи.</p>}
        audio={Audio}
        photo={Logo}
      />
    </React.Fragment>
  )
}

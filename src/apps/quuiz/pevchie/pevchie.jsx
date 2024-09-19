

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
      <Components.Birdssong
       audio={Audio} 
       birds={Logo} 
       name={"Кукушка"}/>
      <Answers 
        goto={"/quiz/hishnye"} 
        correct={"Кукушка"}
        info={<p>
          Кукушка — это птица с характерным криком, обитающая в Европе, Азии и Африке. Она имеет серое оперение и известна тем, что откладывает свои яйца в гнездах других птиц, оставляя их заботиться о своем потомстве. Молодые кукушата обычно выталкивают яйца или птенцов хост-птиц, чтобы получить все внимание и еду. Кукушки питаются насекомыми и мелкими позвоночными, а также активно мигрируют в поисках более благоприятных условий.</p>}
        audio={Audio}
        photo={Logo}
      />
    </React.Fragment>
  )
}

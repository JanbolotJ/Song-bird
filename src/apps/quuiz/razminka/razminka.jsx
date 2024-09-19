

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
      <Components.Birdssong
       audio={Audio} 
       birds={Logo} 
       name={"Страус"}/>
      <Answers
       goto={"/quiz/vorobinye"} 
       correct={"Страус"} 
       info={<p> 
        Страусы — это огромные нелетающие птицы, которые живут в Африке. Они известны своим быстрым бегом, так как могут развивать скорость до 70 км/ч, чтобы убегать от хищников. Страусы питаются травой, семенами и мелкими животными. У них длинные ноги и шея, а также большие глаза, которые помогают им хорошо видеть опасность. Самки откладывают самые крупные яйца среди всех птиц. Хотя страусы не летают, они используют свои крылья для равновесия во время бега.</p>
       }
       audio={Audio}
       photo={Logo}
      />
    </React.Fragment>
  )
}

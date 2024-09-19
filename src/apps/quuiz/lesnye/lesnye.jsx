

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
      <Components.Birdssong
       audio={Audio} 
       birds={Logo} 
       name={"Зеленая пересмешка"}/>
      <Answers 
        goto={"/quiz/pevchie"} 
        correct={"Зеленая пересмешка"}
        info={<p>
          Зеленая пересмешка — это небольшая певчая птица, которая обитает в лесах, зарослях и на опушках в Европе, Азии и Африке. Она отличается ярким зеленовато-желтым оперением, особенно заметным на спине и крыльях. Эти птицы известны своим разнообразным пением, которое включает в себя имитацию звуков других птиц, за что они и получили название "пересмешка". Зеленая пересмешка питается насекомыми, мелкими пауками и иногда ягодами. Обычно она ведет скрытный образ жизни, прячась в густой растительности, но её звонкое и сложное пение часто выдает её присутствие.</p>}
        audio={Audio}
        photo={Logo}
      />
    </React.Fragment>
  )
}

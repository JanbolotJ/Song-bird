

import React from 'react'
import cls from "../../../assets/styles/audio-player/Photo.module.scss"
export default function BirdsPhoto({src}) {
  return (
    <img src={src} alt="" className={cls.birds_photo}/>
  )
}

import React from 'react'
import cls from "../../assets/styles/start/Start.module.scss"
import UseLocations from '../../hooks/UseLocations'

export default function Start() {
    const { actions } = UseLocations();
  return (
    <div className={cls.navbar}>
      <button className={cls.start} onClick={actions.goToRazminka}>Start</button>
    </div>
  )
}

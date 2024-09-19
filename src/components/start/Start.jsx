import React from 'react'
import cls from "../../assets/styles/start/Start.module.scss"
import UseLocations from '../../hooks/UseLocations'

export default function Start() {
    const { actions } = UseLocations();
  return (
    <div className={cls.navbar}>
      <h1 className={cls.gname}>Song-Bird</h1>
      <p className={cls.about}>В этой игре ты должен отгадать птиц по их пению</p>
      <div className={cls.handleclick}>
        <button className={cls.start} onClick={actions.goToRazminka}>Start</button>
      </div>
    </div>
  )
}

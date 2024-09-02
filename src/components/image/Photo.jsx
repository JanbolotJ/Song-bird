

import React from 'react'
import UseLocations from '../../hooks/UseLocations'

export default function Photo({src}) {
  const {actions} = UseLocations();
  return (
    <img src={src} alt="" onClick={actions.GoToMain}/>
  )
}

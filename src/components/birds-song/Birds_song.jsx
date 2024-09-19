import React from 'react';
import { Components } from '..';

export default function Birdssong({ audio, birds, name}) {
  return (
    <div>
      <Components.AudioPlayer src={audio} bird={birds} name={name}/>
    </div>
  )
}

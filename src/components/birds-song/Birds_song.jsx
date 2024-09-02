import React from 'react';
import { Components } from '..';

export default function Birdssong({ audio, birds}) {
  return (
    <div>
      <Components.AudioPlayer src={audio} bird={birds}/>
    </div>
  )
}

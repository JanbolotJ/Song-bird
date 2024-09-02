

import React from 'react'
import { Routes as Switch ,Route } from 'react-router-dom'
import { QuizPages } from '../Lazy'
import { QuizPath } from '../../services/Path'


export default function QuizRoutes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path={QuizPath.razminka} element={<QuizPages.Razminka />}/>
        <Route path={QuizPath.vorobinye} element={<QuizPages.Vorobinye/>}/>
        <Route path={QuizPath.lesnye} element={<QuizPages.Lesnye/>}/>
        <Route path={QuizPath.pevchie} element={<QuizPages.Pevchie/>}/>
        <Route path={QuizPath.hishnye} element={<QuizPages.Hishnye/>}/>
        <Route path={QuizPath.morskie} element={<QuizPages.Morskie/>}/>
      </Switch>
    </React.Fragment>
  )
}

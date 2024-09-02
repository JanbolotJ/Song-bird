
import React from 'react'
import Loading from '../helpers/loading/Loading'
import { Route, Routes as Switch} from 'react-router-dom'
import { Apps } from '../services/Path'
import * as App from "../apps"
import { Components } from '../components'
import { Routers } from '../pages'


export default function Routes() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<Loading />}>
        <Components.Container>
          <Switch>
            <Route path={Apps.main} element={<App.Main />} />
            <Route path={Apps.quuiz} element={<Routers.QuizRoutes />}/>
            <Route path={Apps.results} element={<App.Results />}/>
          </Switch>
        </Components.Container>
      </React.Suspense>
    </React.Fragment>
  )
}

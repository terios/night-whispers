import 'rxjs'
import { Observable } from 'rxjs/Observable'

import { FETCHING_DATA } from '../constants'
import { getDataSuccess, getDataFailure } from '../actions/data'
import getPeople from '../api'

const fetchUserEpic = action$ =>
  action$.ofType(FETCHING_DATA)
    .mergeMap(action =>
      Observable.fromPromise(getPeople())
        .map(response => getDataSuccess(response))
        .catch(error => Observable.of(getDataFailure(error))),)

export default fetchUserEpic

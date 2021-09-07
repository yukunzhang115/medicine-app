import {put, takeEvery} from 'redux-saga/effects'

import * as API from '../api'

export function* watchFetchMeds() {
  yield takeEvery('FETCH_MEDS', lookupMeds)
}



function* lookupMeds() {
  console.log('lookupMeds')
  const meds = yield API.fetchTodaysMedication()
  yield put({type: 'SET_MEDS', payload: meds})
}



export function medReducer (state=[], action) {
    switch (action.type) {
      case 'SET_MEDS':
        return action.payload
      default:
        return state
    }
  }
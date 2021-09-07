import {put, takeEvery} from 'redux-saga/effects'

import * as API from '../api'

import {lookupMeds} from './meds'

export function* submitMedTaken() {
  console.log('submitMedTaken')
  yield takeEvery('SUBMIT_MED', submitMed)
}

function* submitMed(action) {
  console.log('submitMed')
  console.log(action.medId)
  yield API.submitMedicationTaken(action.medId)
  
  const meds = yield API.fetchTodaysMedication()
  yield put({type: 'SET_MEDS', payload: meds})
}
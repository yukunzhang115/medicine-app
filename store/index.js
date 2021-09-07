import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'

import {watchFetchBuddies, reducer as buddyReducer} from './buddies'
import { watchFetchMeds,  medReducer } from './meds'
import {submitMedTaken} from './take'



function* rootSaga() {
  yield all([
    watchFetchBuddies(),
    watchFetchMeds(),
    submitMedTaken()
  ])
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    buddies: buddyReducer, 
    meds: medReducer
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)


export default store
import { createStore, applyMiddleware } from 'redux'
import { socket } from '../index'
import remoteActionMiddleware from '../remote_action_middleware'
import reducer from '../reducer'

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore)
export const store = createStoreWithMiddleware(reducer)

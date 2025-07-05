import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers'

const store = configureStore({
  reducer: {
    contatos: contatosReducer
  }
})

export default store
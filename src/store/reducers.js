import { createSlice } from '@reduxjs/toolkit'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [],
  reducers: {
    adicionar: (state, action) => {
      state.push(action.payload)
    },
    remover: (state, action) => {
      return state.filter(contato => contato.id !== action.payload)
    },
    editar: (state, action) => {
      const index = state.findIndex(c => c.id === action.payload.id)
      if (index !== -1) state[index] = action.payload
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
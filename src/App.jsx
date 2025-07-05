import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar, remover } from './store/reducers'

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  font-family: sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const Titulo = styled.h1`
  text-align: center;
  color: #333;
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Botao = styled.button`
  padding: 10px 16px;
  margin-top: 10px;
  border: none;
  background-color: #0077cc;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`

const Contato = styled.div`
  padding: 12px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Info = styled.span`
  flex: 1;
`

const RemoverBtn = styled.button`
  padding: 6px 10px;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d62828;
  }
`

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const dispatch = useDispatch()
  const contatos = useSelector((state) => state.contatos)

  const handleAdd = () => {
    if (!nome || !email || !telefone) {
      alert('Preencha todos os campos')
      return
    }

    dispatch(adicionar({ id: Date.now(), nome, email, telefone }))
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Container>
      <Titulo>Lista de Contatos</Titulo>
      <Input placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
      <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <Botao onClick={handleAdd}>Adicionar Contato</Botao>

      {contatos.map((c) => (
        <Contato key={c.id}>
          <Info>
            <strong>{c.nome}</strong> - {c.email} - {c.telefone}
          </Info>
          <RemoverBtn onClick={() => dispatch(remover(c.id))}>Remover</RemoverBtn>
        </Contato>
      ))}
    </Container>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './store/reducers'
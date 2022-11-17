import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const dados = [
  {
    "nome": "Rodrigo dos Santos",
    "email": "rodrigo@gmail.com",
    "telefone": "988776644"
  }
]

export const Clientes = () => {

  const [pessoas, setPessoas] = useState(dados);

  const [nome, setNome] = useState('');
  const handleChange = (event) => {
    setNome(event.target.value)
  }

  return (
    <>
      <h1>Clientes</h1>

      <form action="">
        <input type="text" value={nome} onChange={handleChange}/>
        <Button variant="primary">Primary</Button>
      </form>
      <ol>
          pessoas[0]["nome"].map({(pessoa) => {
          return <li>{pessoa}</li>
          }}) 
      </ol>
    </>
  )
}

export default Clientes;

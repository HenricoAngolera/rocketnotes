import { useState } from 'react'
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { api } from '../../services/api'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill in all fields!")
    }

    api.post("/users", {
      name,
      email,
      password
    })
      .then(() => {
        alert("Successfully registered user!")
        return navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message)
        } else {
          return alert("Unable to register.")
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder='Senha'
          type='password'
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={handleSignUp} title='Cadastrar' />
        <Link to="/">
          Voltar para o login
        </Link>
      </Form>
    </Container>
  );
}
import React, { useState, FormEvent } from "react";
import "./styles.css";
import { InputBox, Button } from "../../components";
import { Link } from "react-router-dom";

export type registeredUsers = {
  username: string;
  password: string;
};

export type LoginProps = { history: any };
export const Login: React.FC<LoginProps> = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usersString = localStorage.getItem("registeredUsers");
  const registeredUsers: registeredUsers[] =
    usersString != null ? JSON.parse(usersString) : [];
  const credentials = registeredUsers.find(user => user.username === username);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (username === "" || password === "") {
      alert("Por favor preencha todos os campos!");
      return;
    }

    if (!credentials) {
      alert("Usuário não encontrado. Por favor realize o cadastro!");
      return;
    }

    if (credentials.password === password) {
      console.log(`Usuário ${username} logado!`);
      localStorage.setItem("user", username);
      history.push("/dashboard");
    } else {
      alert("Senha incorreta!");
    }
  }
  return (
    <>
      <p className="textlogin">
        Um jeito <strong>fácil</strong> e <strong>rápido</strong> de acessar
        seus repositórios.
      </p>

      <form onSubmit={handleSubmit}>
        <InputBox
          name="username"
          type="text"
          variable={username}
          callback={setUsername}
        />
        <InputBox
          name="password"
          type="password"
          variable={password}
          callback={setPassword}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/New">
        <Button>Cadastrar</Button>
      </Link>
    </>
  );
};

export default Login;

import React, { useState, FormEvent } from "react";
import "./styles.css";
import apiGit from "../../services/apigit";
import { InputBox, Button } from "../../components/";
import { Link } from "react-router-dom";

export type NewProps = { history: any };
export const New: React.FC<NewProps> = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await apiGit(username).catch(error =>
      console.warn("Usuário não encontrado no GitHub")
    );
    if (!response) {
      alert("Usuário não existe!");
      history.push("/");
      return;
    }
    const usersString = localStorage.getItem("registeredUsers");
    const savedUsers = usersString != null ? JSON.parse(usersString) : [];
    for (const currentUser of savedUsers) {
      if (currentUser.username === username) {
        alert("Usuário já cadastrado!");
        history.push("/");
        return;
      }
    }
    savedUsers.push({ username, password });
    localStorage.setItem("registeredUsers", JSON.stringify(savedUsers));
    alert("Cadastrado com sucesso!");
    history.push("/");
  };

  return (
    <>
      <p>Tela de Cadastro</p>
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
        <Button>Cadastrar</Button>
      </form>
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </>
  );
};

export default New;

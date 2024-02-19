import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createUser } from "../services/connect";

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const signUp = async (e) => {
    e.preventDefault();

    const body = { name, cpf, email, password, phone };

    const result = await createUser(body);

    console.log(result);
    alert(result);
  };

  return (
    <StyledForm onSubmit={signUp}>
      <Title>Cadastro</Title>
      <StyledInput 
        type="text" 
        placeholder="Nome" 
        minLength={3} 
        maxLength={30} 
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledInput 
        type="text" 
        placeholder="CPF" 
        minLength={11} 
        maxLength={11} 
        required 
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <StyledInput 
        type="email" 
        placeholder="E-mail" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput 
        type="password" 
        placeholder="Senha" 
        minLength={4} 
        maxLength={25} 
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledInput 
        type="tel" 
        placeholder="Celular"  
        value={phone}
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      <StyledButton type="submit">Cadastrar-se!</StyledButton>
      <StyledParagraph>Já possui uma conta? <StyledLink to={'/'} >Entrar</StyledLink> </StyledParagraph>
    </StyledForm>
  );
};

export default SignUpPage;

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledParagraph = styled.p`
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

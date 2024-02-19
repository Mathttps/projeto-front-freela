import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AutContext";
import { login } from "../services/connect";
import styled from "styled-components";

const SignInPage = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { getAuth, setGetAuth } = useContext(AuthContext);
 

  const signIn = async (e) => {
    e.preventDefault();

    const body = { email, password };

    const result = await login(body);
    console.log(result);

    if (result.token && result.name) {
      localStorage.setItem('authToken', JSON.stringify(result.token));
      localStorage.setItem('authName', JSON.stringify(result.name));
      setGetAuth(getAuth + 1);
      navigate('/');
    } else {
      alert(result);
    }
  };

  return (
    <Form onSubmit={signIn}>
      <h1>Login</h1>
      <Input
        type="email"
        placeholder="E-mail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        minLength={4}
        maxLength={25}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Entrar!</Button>
      <Paragraph>Não possui uma conta? <LinkStyled to={'/sign-up'} >Cadastrar-se</LinkStyled> </Paragraph>
    </Form>
  );
};

export default SignInPage;


export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
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

export const Paragraph = styled.p`
  margin-top: 15px;
`;

export const LinkStyled = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

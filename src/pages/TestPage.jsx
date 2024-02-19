import { useState, useEffect, useContext } from "react";
import { Form } from "../assets/styled-components/UserForm";
import { updateUser } from "../services/connect";
import { AuthContext } from "../context/AuthContext";

const UserProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    setFormData({
      name: authToken.user.name,
      email: authToken.user.email,
      password: '',
      confirmPassword: ''
    });
  }, [authToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    const result = await updateUser(authToken.token, formData);
    alert(result);
  };

  return (
    <Form onSubmit={handleSubmit}>
      Perfil do Usuário
      <input type="text" name="name" placeholder="Nome" required value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="E-mail" required value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Nova Senha" value={formData.password} onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirmar Nova Senha" value={formData.confirmPassword} onChange={handleChange} />
      <input type="submit" value="Atualizar Perfil" />
    </Form>
  );
};

export default UserProfilePage;

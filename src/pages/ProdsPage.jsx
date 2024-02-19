import { useState, useEffect, useContext } from "react";
import Select from 'react-select';
import styled from "styled-components";
import { Form } from "../assets/styled-components/AuthForm";
import { categories, createProduct } from "../services/connect";
import { AuthContext } from "../context/AutContext";

const prodPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    categoryId: '',
    price: '',
    photo: ''
  });

  const [selectOptions, setSelectOptions] = useState([]);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    categories().then(res => setSelectOptions(res));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData({ ...formData, categoryId: selectedOption.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createProduct(authToken.token, formData);
    alert(result);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Cadastro de Produto</Title>
      <StyledInput type="text" name="name" placeholder="Produto" minLength={6} maxLength={100} required value={formData.name} onChange={handleChange} />
      <StyledInput type="text" name="description" placeholder="Descrição" minLength={6} maxLength={100} required value={formData.description} onChange={handleChange} />
      <StyledInput type="number" name="price" placeholder="Preço" required value={formData.price} onChange={handleChange} />
      <StyledInput type="text" name="photo" placeholder="URL Foto" required value={formData.photo} onChange={handleChange} />
      <StyledSelect options={selectOptions} required onChange={handleCategoryChange} />
      <StyledButton type="submit">Desapegar</StyledButton>
    </StyledForm>
  );
};

export default prodPage;

const StyledForm = styled(Form)`
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

const StyledSelect = styled(Select)`
  width: 100%;
  margin-bottom: 15px;
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

import styled from "styled-components";

export const MyForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: auto;
  flex-direction: column;
  background-color: #c7ebf0;
  padding: 20px;
  border-radius: 10px;
  label {
    font-size: 20px;
    color: #241623;
  }
  input {
    background-color: #fff;
    color: #241623;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
  }
  input:hover {
    background-color: #ccc;
  }
`;

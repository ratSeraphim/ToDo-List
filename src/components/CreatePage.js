import styled from "styled-components";
import useLocalStorage from "./useLocalStorage";

const MyForm = styled.form`
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
`;

const CreatePage = () => {
  const [formVal, setFormVal] = useLocalStorage("task", "");

  const getFormData = (e) => {
    e.preventDefault();
    var data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());

    setFormVal(formObject);
  };

  return (
    <MyForm onSubmit={getFormData}>
      <label>Task Name:</label>
      <input type="text" name="name" />
      <label>Description:</label>
      <input type="textarea" name="description"></input>
      <label>Date:</label>
      <input type="date" name="date" />
      <input type="submit" value="Save" />
    </MyForm>
  );
};

export default CreatePage;

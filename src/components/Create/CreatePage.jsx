import { useNavigate } from "react-router-dom";
import Button from "../functionButtons/Button";
import useLocalStorage from "../useLocalStorage";
import * as S from "./style";

const CreatePage = () => {
  const navigate = useNavigate();
  let todoArray = [];
  const [formVal, setFormVal] = useLocalStorage("task", "");

  const addTask = (e) => {
    e.preventDefault();

    var data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());

    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    console.log(todoArray[todoArray.length]);

    todoArray.push(formObject);
    localStorage.setItem("todo", JSON.stringify(todoArray));

    setFormVal(formObject);
    console.log(formVal);
    navigate("/");
  };

  return (
    <S.MyForm onSubmit={addTask}>
      <label>Task Name:</label>
      <input type="text" name="name" />
      <label>Description:</label>
      <input type="textarea" name="description"></input>
      <label>Date:</label>
      <input type="date" name="date" />
      <input type="submit" value="Save" />
      <Button label="cancel"></Button>
    </S.MyForm>
  );
};

export default CreatePage;

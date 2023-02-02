import { useNavigate } from "react-router-dom";
import Button from "../functionButtons/Button";
import getCurrentDate from "./getCurrentDate";
import * as S from "./style";

const CreatePage = ({ index }) => {
  const navigate = useNavigate();
  let todoArray = [];

  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }

  const editTask = (e) => {
    let data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    todoArray[index] = formObject;

    localStorage.setItem("todo", JSON.stringify(todoArray));
    navigate("/");
  };

  const addTask = (e) => {
    let data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    e.preventDefault();

    console.log(todoArray[todoArray.length]);

    todoArray.push(formObject);
    localStorage.setItem("todo", JSON.stringify(todoArray));

    navigate("/");
  };

  if (index === -1) {
    return (
      <S.MyForm onSubmit={addTask}>
        <label>Task Name:</label>
        <input type="text" name="name" required />
        <label>Description:</label>
        <input type="textarea" name="description"></input>
        <label>Date created:</label>
        <input name="date" value={getCurrentDate()} readOnly />
        <input type="submit" value="Save" />
        <Button label="cancel"></Button>
      </S.MyForm>
    );
  } else if (index >= 0) {
    return (
      <S.MyForm onSubmit={editTask}>
        <label>Task Name:</label>
        <input
          type="text"
          name="name"
          required
          defaultValue={todoArray[index].name}
        />
        <label>Description:</label>
        <input
          type="textarea"
          name="description"
          defaultValue={todoArray[index].description}
        ></input>
        <label>Date edited:</label>
        <input name="date" value={getCurrentDate()} readOnly />
        <input type="submit" value="Save" />
        <Button label="cancel"></Button>
      </S.MyForm>
    );
  }
};

export default CreatePage;

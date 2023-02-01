import useLocalStorage from "../useLocalStorage";
import * as S from "./style";

const CreatePage = () => {
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
    todoArray.push(formObject);
    localStorage.setItem("todo", JSON.stringify(todoArray));

    setFormVal(formObject);
    console.log(formVal);
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
    </S.MyForm>
  );
};

export default CreatePage;

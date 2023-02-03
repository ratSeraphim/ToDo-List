import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../functionButtons/Button";
import * as S from "./style";

const CreatePage = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const navigate = useNavigate();
  const { i } = useParams();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    setAllTasks(JSON.parse(localStorage.getItem("todo")));
  }, []);

  useEffect(() => {
    if (i) {
      const selectedItem = allTasks.find((task) => task.id === i);

      if (selectedItem) {
        setFormData({
          name: selectedItem.name,
          description: selectedItem.description,
        });
      }
    }
  }, [allTasks, i]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (i) {
      const selectedItem = allTasks.find((task) => task.id === i);
      const editedTask = {
        id: selectedItem.id,
        name: formData.name,
        description: formData.description,
        date: selectedItem.date,
      };

      const newArr = [];

      const arrayNoEditedItem = allTasks.filter((item) => item.id !== i);
      if (allTasks) {
        arrayNoEditedItem.push(editedTask);
        localStorage.setItem("todo", JSON.stringify(arrayNoEditedItem));
      } else {
        newArr.push(editedTask);
        localStorage.setItem("todo", JSON.stringify(newArr));
      }
    } else {
      const taskToAdd = {
        id: crypto.randomUUID(),
        name: formData.name,
        description: formData.description,
        date: new Date().toLocaleDateString(),
      };

      if (!allTasks) {
        const newArr = [];
        newArr.push(taskToAdd);
        localStorage.setItem("todo", JSON.stringify(newArr));
      } else {
        allTasks.push(taskToAdd);
        localStorage.setItem("todo", JSON.stringify(allTasks));
      }
    }
    navigate("/");
  };

  return (
    <S.MyForm onSubmit={handleSubmit}>
      <label>Task Name:</label>
      <input
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleInput}
      ></input>
      <label>Description:</label>
      <input
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleInput}
      ></input>
      <input type="submit" value="Save" />
      <Button label="cancel"></Button>
    </S.MyForm>
  );
};

export default CreatePage;

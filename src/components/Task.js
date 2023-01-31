import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./functionButtons/Button";

const TaskDisplay = styled.div`
  display: flex;
  margin: 30px auto;
  min-width: 80%;
  flex-direction: column;
  background-color: #c7ebf0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 10px 5px rgba(36, 22, 35, 0.6);
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: #241623;
`;

const Description = styled.div``;
const Date = styled.div`
  color: rgba(36, 22, 35, 0.7);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

//temporarily hard-coding a task so I can figure out the formatting. will fix later.
const Task = () => {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("task"));
    if (items) {
      console.log(items.name);
      setName(items.name);
      setDate(items.date);
      setDesc(items.description);
    }
  });

  return (
    <TaskDisplay>
      <Title>{name}</Title>
      <Date>{date}</Date>
      <Description>{desc}</Description>

      <ButtonContainer>
        <Button label="edit" primary />
        <Button label="delete" />
      </ButtonContainer>
    </TaskDisplay>
  );
};

export default Task;

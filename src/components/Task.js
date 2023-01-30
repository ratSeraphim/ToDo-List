import styled from "styled-components";
import Delete from "./functionButtons/Delete";
import Edit from "./functionButtons/Edit";
import Buttons from "./functionButtons/TaskButtons";

const TaskDisplay = styled.div`
  display: flex;
  margin: 30px;
  flex-direction: row;
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
const Date = styled.div``;

//temporarily hard-coding a task so I can figure out the formatting. will fix later.
const Task = () => {
  return (
    <TaskDisplay>
      <Title>Temp Task 1</Title>
      <Date>2022/01/30</Date>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ex
        consequatur eveniet odit sunt rem officiis ad enim ipsa quaerat dolor,
        expedita repudiandae adipisci vel quibusdam blanditiis distinctio
        reiciendis autem!
      </Description>
      <Buttons />
    </TaskDisplay>
  );
};

export default Task;

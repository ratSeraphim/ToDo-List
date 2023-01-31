import styled from "styled-components";
import Button from "./functionButtons/Button";

const TaskDisplay = styled.div`
  display: flex;
  margin: 30px;
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

      <ButtonContainer>
        <Button label="edit" primary />
        <Button label="delete" />
      </ButtonContainer>
    </TaskDisplay>
  );
};

export default Task;

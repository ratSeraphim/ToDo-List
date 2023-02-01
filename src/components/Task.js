import styled from "styled-components";
import Button from "./functionButtons/Button";

const TaskDisplay = styled.div`
  display: flex;
  margin: 30px auto;
  max-width: 80%;
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

const Map = styled.div`
  width: 100%;
`;

const Task = () => {
  let todoArray = [];
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  //going to remove {index} from title later, just want to keep track of it for now
  return (
    <Map>
      {todoArray.map((list, index) => (
        <TaskDisplay key={index} index={index}>
          <Title>
            Nr {index}: {list.name}
          </Title>
          <Date>{list.date}</Date>
          <Description>{list.description}</Description>

          <ButtonContainer>
            <Button label="edit" primary />
            <Button label="delete" />
          </ButtonContainer>
        </TaskDisplay>
      ))}
    </Map>
  );
};

export default Task;

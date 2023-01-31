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

const Task = () => {
  let todoArray = [];
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  return (
    <div>
      {todoArray.map((list) => (
        <TaskDisplay key={list.id}>
          <Title>{list.name}</Title>
          <Date>{list.date}</Date>
          <Description>{list.description}</Description>

          <ButtonContainer>
            <Button label="edit" primary />
            <Button label="delete" />
          </ButtonContainer>
        </TaskDisplay>
      ))}
    </div>
  );
};

/*error in console comes up:
 "react-jsx-dev-runtime.development.js:87 
        
  Warning: Each child in a list should have a unique "key" prop." 
       ?? obviously messing with formatting, too.
       note to self: figure out what's up with that T_T */
export default Task;

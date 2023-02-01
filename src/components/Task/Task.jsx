import * as S from "./style";
import Button from "../functionButtons/Button";

const Task = (props) => {
  let todoArray = [];
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }

  const filteredData = todoArray.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.input);
    }
  });

  //going to remove {index} from title later, just want to keep track of it for now
  return (
    <S.Map>
      {filteredData.map((list, index) => (
        <S.TaskDisplay key={index} index={index}>
          <S.Title>
            Nr {index}: {list.name}
          </S.Title>
          <S.Date>{list.date}</S.Date>
          <div>{list.description}</div>

          <S.ButtonContainer>
            <Button label="edit" primary />
            <Button label="delete" />
          </S.ButtonContainer>
        </S.TaskDisplay>
      ))}
    </S.Map>
  );
};

export default Task;

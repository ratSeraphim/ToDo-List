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
  //going to remove {i} from title later, just want to keep track of it for now

  if (filteredData.length > 0) {
    return (
      <S.Map>
        {filteredData.map((list, i) => (
          <S.TaskDisplay key={i} i={i}>
            <S.Title>
              Nr {i}: {list.name}
            </S.Title>
            <S.Date>created: {list.date}</S.Date>
            <div>{list.description}</div>
            <S.ButtonContainer>
              <Button label="edit" primary index={i} />
              <Button label="delete" index={i} />
            </S.ButtonContainer>
          </S.TaskDisplay>
        ))}
      </S.Map>
    );
  } else
    return (
      <S.TaskDisplay>No entries found. Try adding a new one!</S.TaskDisplay>
    );
};

export default Task;

/**/

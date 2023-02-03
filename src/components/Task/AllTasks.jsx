import * as S from "./style";
import Button from "../functionButtons/Button";

const AllTasks = ({ allTasks }) => {
  return (
    <>
      {(!allTasks || allTasks.length === 0) && (
        <S.TaskDisplay>No entries found</S.TaskDisplay>
      )}
      {allTasks && (
        <S.Map>
          {allTasks.map((list, i) => (
            <S.TaskDisplay key={i} i={i}>
              <S.Title>{list.name}</S.Title>
              <S.Date>created: {list.date}</S.Date>
              <div>{list.description}</div>
              <S.ButtonContainer>
                <S.MyButton to={`/edit/${list.id}`}>Edit</S.MyButton>
                <Button label="delete" id={list.id} />
              </S.ButtonContainer>
            </S.TaskDisplay>
          ))}
        </S.Map>
      )}
    </>
  );
};

export default AllTasks;

/**/

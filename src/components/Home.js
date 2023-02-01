import styled from "styled-components";
import Task from "./Task/Task";

//styled components
const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = ({ searchInput }) => {
  return (
    <div>
      <TaskList>
        <Task input={searchInput} />
      </TaskList>
    </div>
  );
};

export default Home;

import styled from "styled-components";
import Task from "./Task";

//styled components
const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  return <TaskList>{<Task />}</TaskList>;
};

export default Home;

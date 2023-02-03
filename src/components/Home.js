import { useEffect, useState } from "react";
import styled from "styled-components";
import Task from "./Task/Task";

//styled components
const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = ({ searchInput }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setAllTasks(JSON.parse(localStorage.getItem("todo")));
  }, []);

  useEffect(() => {
    if (searchInput) {
      const filteredTasks = allTasks.filter((task) =>
        task.name.includes(searchInput)
      );
      setFilteredTasks(filteredTasks);
    }
  }, [searchInput]);
  return (
    <div>
      <TaskList>
        {!searchInput && <Task allTasks={allTasks} />}
        {searchInput && <Task allTasks={filteredTasks} />}
      </TaskList>
    </div>
  );
};

export default Home;

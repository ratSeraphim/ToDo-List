import { useEffect, useState } from "react";
import styled from "styled-components";
import AllTasks from "./Task/AllTasks";

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
        task.name.toLowerCase().includes(searchInput)
      );
      setFilteredTasks(filteredTasks);
    }
  }, [searchInput]);
  return (
    <div>
      <TaskList>
        {!searchInput && <AllTasks allTasks={allTasks} />}
        {searchInput && <AllTasks allTasks={filteredTasks} />}
      </TaskList>
    </div>
  );
};

export default Home;

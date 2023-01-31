import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  background-color: #241623;
  border-bottom: solid 10px #084c61;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const SiteTitle = styled.h1`
  margin: 10px;
  font-size: 40px;
  color: #70a9a1;
`;

const MyButton = styled(Link)`
  margin-right: 10px;
  padding: 10px;
  border-radius: 10px;
  color: #241623;
  background-color: #70a9a1;
  &:hover {
    background-color: #084c61;
    cursor: pointer;
    color: #fff;
  }
`;

const InputField = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  color: #241623;
  background-color: #70a9a1;
  &:hover {
    background-color: #084c61;
    cursor: pointer;
    color: #fff;
  }
`;

/* change a href to router links when i've got the page content done */
const Navbar = () => {
  return (
    <Navigation>
      <SiteTitle>To-Do List</SiteTitle>
      <div className="links">
        <MyButton to="/">Home</MyButton>
        <MyButton to="/create">Create New</MyButton>
      </div>
      <form>
        <InputField type="text" placeholder="search"></InputField>
      </form>
    </Navigation>
  );
};

export default Navbar;

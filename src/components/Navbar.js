import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  background-color: #241623;
  border-bottom: solid 10px #084c61;
`;

const SiteTitle = styled.h1`
  margin: 10px;
  font-size: 40px;
  color: #70a9a1;
`;

const Links = styled.a`
  margin: auto auto;
  padding: 20px;
  border-radius: 10px;
  color: #241623;
  background-color: #70a9a1;
  &:hover {
    background-color: #084c61;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Navigation>
      <SiteTitle>To-Do list</SiteTitle>
      <Links href="/">Home</Links>
      <Links href="/create">Create New</Links>
    </Navigation>
  );
};

export default Navbar;

import styled from "styled-components";

const MyButton = styled.a`
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

const Edit = () => {
  return <MyButton>Edit</MyButton>;
};

export default Edit;

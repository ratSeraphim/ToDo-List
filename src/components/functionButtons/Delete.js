import styled from "styled-components";

const DeleteButton = styled.a`
  padding: 10px;
  border-radius: 10px;
  color: #241623;
  background-color: #f46036;
  &:hover {
    background-color: #e71d36;
    cursor: pointer;
    color: #fff;
  }
`;
const Delete = () => {
  return <DeleteButton>Delete</DeleteButton>;
};

export default Delete;

import styled from "styled-components";

const SearchBar = ({ searchInput, handleInputChange }) => {
  return (
    <InputField
      type="text"
      placeholder="Search"
      onChange={handleInputChange}
      value={searchInput}
    ></InputField>
  );
};

export default SearchBar;
const InputField = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  color: #241623;
  background-color: #70a9a1;
  &:hover {
    background-color: #084c61;
    color: #fff;
  }
`;

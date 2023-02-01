import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  background-color: #241623;
  border-bottom: solid 10px #084c61;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const SiteTitle = styled.h1`
  margin: 10px;
  font-size: 40px;
  color: #70a9a1;
`;

export const MyButton = styled(Link)`
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

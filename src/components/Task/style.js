import { Link } from "react-router-dom";
import styled from "styled-components";

export const TaskDisplay = styled.div`
  display: flex;
  margin: 30px auto;
  max-width: 80%;
  flex-direction: column;
  background-color: #c7ebf0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgba(80, 100, 140, 0.6);
`;
export const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: #241623;
`;

export const Date = styled.div`
  color: rgba(36, 22, 35, 0.7);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Map = styled.div`
  width: 100%;
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

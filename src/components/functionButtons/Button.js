import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = ({ primary, label, index }) => {
  const navigate = useNavigate();
  let todo = localStorage.getItem("todo");
  const todoArray = JSON.parse(todo);

  const handleClick = () => {
    switch (label) {
      case "delete":
        console.log("clicked #" + index + " value");
        todoArray.splice(index, 1);
        localStorage.setItem("todo", JSON.stringify(todoArray));
        window.location.reload();
        break;
      case "edit":
        console.log("edit " + index);
        break;
      case "cancel":
        console.log("cancel");

        navigate("/");
        break;
      default:
        console.log("button clicked");
    }
  };

  return (
    <DefaultButton primary={primary} onClick={handleClick}>
      {label}
    </DefaultButton>
  );
};

const DefaultButton = styled.a`
    min-width: 100px; 
    padding: 10px;
    border-radius: 10px;
    color #241623;
    background-color: ${(props) => (props.primary ? `#70a9a1` : `#f46036`)};
    &:hover{
        background-color: ${(props) =>
          props.primary ? `#084c61` : `#e71d36`};;
        cursor: pointer;
        color: #fff;
    }
    `;

export default Button;

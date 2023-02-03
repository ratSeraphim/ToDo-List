import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = ({ primary, label, id }) => {
  const navigate = useNavigate();
  const allTasks = JSON.parse(localStorage.getItem("todo"));

  const handleClick = () => {
    switch (label) {
      case "delete":
        const newArrayAfterDelete = allTasks.filter((item) => item.id !== id);
        localStorage.setItem("todo", JSON.stringify(newArrayAfterDelete));
        window.location.reload();
        break;
      case "cancel":
        navigate("/");
        break;
      default:
        break;
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

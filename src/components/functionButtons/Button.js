import styled from "styled-components";

const Button = ({ primary, label }) => {
  return <DefaultButton primary={primary}>{label}</DefaultButton>;
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

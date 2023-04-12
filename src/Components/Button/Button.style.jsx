import styled from "styled-components";

const ButtonSite = styled.button`
    background-color: transparent;
    color:  ${props => props.type == "light" ? "green" : "yellow"};
    border: 2px solid green;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
`

export { ButtonSite }
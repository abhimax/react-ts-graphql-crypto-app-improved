import styled from "styled-components";

const Input = styled.input`
    height: 40px;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius?.input };
    padding: 0.1rem 1rem;
    border: 1px solid ${(props) => props.theme.color?.textGrey };
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    &:hover, &:focus, &:focus-visible{
        border: 1px solid ${(props) => props.theme.color?.textGrey };
        outline: none;
      }
`;
export { Input };

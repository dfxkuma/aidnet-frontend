import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 10%;
    background-color: #757575;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    color: white;
    border: none;
    font-size: 20px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #555555;
    }
`;

const Navbutton = ({ name , style, onClick }) => {
    return <StyledButton style={style} onClick={onClick}>
        {name}
    </StyledButton>
}

export default Navbutton;
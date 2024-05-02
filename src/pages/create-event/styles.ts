import styled from 'styled-components';

export const CreateEventContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: #F0E9D1;
`;

export const Header = styled.header`
    height: 170px;
    border-radius: 0 0 35px 35px;
    width: 100%;
    box-shadow: 1px 3px 4px rgb(0 0 0 / 25%);
    background: #292F36;
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-template-areas: 
    'image text'
    'image text'
    'image text'
    'image stars'
    ;
    place-content: center;

    button {
        margin-top: 50px;
    }
`;

export const Image = styled.img`
    grid-area: image;
    margin: auto;    
`;

export const Name = styled.p`
    font-weight: bold;
    font-size: 22px;
    color: #EEEEEE;
`;

export const Span = styled.span`
    color: #EEEEEE;
`;

export const StarsContainer = styled.div`
    display: flex;
    gap: 4px;
`;

export const Section = styled.section`
    display: flex;
    gap: 4px;
    flex-direction: column;
`;

export const Main = styled.main`
    margin: 35px 0 35px 23px;
    overflow: scroll;
`;

export const Title = styled.h1`
    font-size: 23px;
    color: #1F2124;

    &::after {
        content: '';
        display: block;
        background: #1F2124;
        width: 294px;
        height: 3px;
        margin: 0 0 33px 0;
        border-radius: 18px; 
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 26px 0;
`;

export const Label = styled.label`
    font-size: 19px;
`;

export const Input = styled.input`
    color: rgb(31 33 36 / 44%);
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid rgb(31 33 36 / 44%);
    outline: none;
    width: 294px;
    background: transparent;
    font-size: 17px;
`;

export const Preference = styled.p`
    font-size: 19px;
    color: rgb(31 33 36 / 44%);
`;
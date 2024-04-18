import styled from 'styled-components';

export const ProfileContainer = styled.div`

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
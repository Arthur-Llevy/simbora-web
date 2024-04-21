import styled from 'styled-components';

export const InitialPageContainer = styled.div`
	background: url('/images/background.svg');
	height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #F0E9D1;
    width: 100vw;
`;

export const TextContainer = styled.div`
    width: 80vw;
    margin: 21px 0 0 21px;
    max-width: 352px;

	p {
	    color: #6F6C5D;
	    font-weight: bold;
	    font-size: 19px;
	}
`;

export const ButtonContainer = styled.div`
    margin: 103px 0 0 0;
`;

export const Main = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 70% 0px;
 `;

export const Header = styled.header`
    display: flex;
    gap: 2px;
    align-items: center;
    width: 100%;
`;

export const Span = styled.span`
	color: #688356;
`;

export const Image = styled.img`
    width: 92px;
    margin: 0 0 0 21px;
`;

export const Heading = styled.h1`
	font-family: "Jockey One", sans-serif;
    font-size: 15vw;
`;
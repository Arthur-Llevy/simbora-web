import styled from 'styled-components';

export const Container = styled.div`
	header {
		img {
			width: 100%;
		}
	}
`;

export const Heading = styled.h1`
	font-family: "Outfit", sans-serif;
	font-size: 20px;
	font-weight: 500;
	padding: 0 0 0 27px;

	&::after {    	
		content: '';
		display: block;
		width: 287px;
		height: 3px;
		margin: 4px 0 0 -26px;
		background: linear-gradient(to right, rgb(226 143 86 / 20%), #BA706A, #FA7921);
    }
`;

export const InputContainer = styled.div`
    margin: 31px 0 62px 0;
    display: flex;
    flex-direction: column;
    gap: 23px;
    align-items: center;   
`;


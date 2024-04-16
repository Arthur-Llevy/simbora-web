import styled from 'styled-components';

export const Container = styled.div`

	background-color: #F0E9D1;
	height: 100vh;


	header {
		img {
			width: 100%;
		}
	}

	main span {
		color: #635C5C;
		font-size: 16px;
		font-weight: bold;
		text-decoration: none;
		text-align: center;
		display: block;

		a {
			text-decoration: none;
			color: #FA7921
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

export const Footer = styled.footer`

	display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 10% 0 0 0;

	div:nth-child(1) {
		display: block;
		width: 132px;
		height: 3px;
		background: linear-gradient(to right, rgb(226 143 86 / 20%), #BA706A, #FA7921);
	}

	div:nth-child(3) {
		display: block;
		width: 132px;
		height: 3px;
		background: linear-gradient(to left, rgb(226 143 86 / 20%), #BA706A, #FA7921);
	}

	img {
		width: 92px;
	}
`;
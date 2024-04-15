import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
    width: ${props => props.largeSize ? '330px' : '140px'};
    height: 45px;
    padding: 10px 0;
    font-weight: bold;
    color: #fff;    
    border: none;
    font-size: 20px;
    border-radius: 5px;
    background-color: ${props => props.primary ? '#292F36' : '#292F36;'};
	background-color: ${props => props.secondary ? '#BD1B1E' : '#292F36;'};
	margin: 0 auto;
	display: block;

	a {
		text-decoration: none;
		color: #fff;
	}
`; 
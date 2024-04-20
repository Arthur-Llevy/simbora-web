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
    background-color: ${props => {
        if(props.primary) return '#292F36'
        if(props.secondary) return '#BD1B1E'
        if(props.tertiary) return '#688356'
        if(props.quartenary) return '#40798C'
        return '#FFF'
    }};
	margin: 19px auto;
	display: flex;
    justify-content: center;
    gap: 21px;
    align-items: center;
   
	a {
		text-decoration: none;
		color: #fff;
	}

    svg {
        height: 33px;
        width: 33px;
    }
`; 
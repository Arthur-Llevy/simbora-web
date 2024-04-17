import styled from 'styled-components';

export const MenuContainer = styled.nav`
    width: 310px;
    margin: 0 auto;
    background: #0B0B0B;
    border-radius: 60px;
    height: 46px;
    position: absolute;
    top: 93%;
    left: 50%;
    transform: translateX(-50%);

    ul {
    	display: flex;
	    align-items: center;
	    justify-content: space-evenly;
	    height: 100%;
	    list-style: none
    }

    ul li svg {
		font-size: 20px;
		cursor: pointer;
    }
`;
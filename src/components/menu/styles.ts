import styled from 'styled-components';

export const MenuContainer = styled.nav`
    width: 100%;
    max-width: 310px;
    margin: 0 auto;
    background: #0B0B0B;
    border-radius: 5px;
    height: auto;
    position: relative;
    padding: 10px;

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

export const MenuPopupContainer = styled.div`
    position: absolute;
    width: 40px;
    top: -150px;
    left: calc(100% - 40px);

    ul {
        display: flex;
        flex-direction: column;
    }

    ul li svg {
        color: #fff;
        padding: 10px;
        cursor: pointer;
        width: 40px;
        background: #0b0b0b;
        height: 40px;
        border-radius: 5px;
    }
`;
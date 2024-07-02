import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: #F0E9D1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

 	.svg {
    	width: 46px;
  	  	height: 29px;
	    background: #fff;
	    padding: 5px;
	    border-radius: 22px;
	    margin: 10px 10px 0 0;
	    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`;

export const Main = styled.main`

    height: 100%;
    overflow: scroll;
    
	div {
		display: flex;
		justify-content: space-evenly;

		select {
			border-radius: 17px;
		    background: #fff;
		    padding: 4px 20px;
		    box-shadow: 1px 3px 4px rgb(0 0 0 / 25%);
		    border: none;
		}

		input {
			border-radius: 17px;
		    background: #fff;
		    outline: none;
		    border: none;
		    padding: 4px 20px;
		    box-shadow: 1px 3px 4px rgb(0 0 0 / 25%);
		}
	}
`;

export const MainHeader = styled.header`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 15px;
	align-items: center;
	padding: 0 0 0 15px;
	width: 95%;

	input {
	    background: none;
	    border-bottom: 2px solid #1F2124;
	    outline: none;
	    border-top: none;
	    padding: 4px 0px;
	    border-left: none;
	    border-right: none;
	    font-size: 18px;
	    color: #1F2124;
	    width: 100%;
	    max-width: 355px;
	}

	svg {
	    border: 1px solid #000;
	    padding: 5px;
	    width: 36px;
	    height: 26px;
	    border-radius: 20px;
	    cursor: pointer;
	}
`;

export const HomeContainerHeader = styled.header`
	display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    align-items: center;
    margin: 0 0 16px 0;

    h1 {
    	padding: 35px 0 0 15px;
		font-size: 29px;
    }

    img {
    	padding: 13px 11px 0 0;
    }
`;

export const EventsContainer = styled.div`
	display: flex;
    flex-direction: column;
    gap: 29px;
    align-items: center;
    margin: 30px 0 70px 0;
`;
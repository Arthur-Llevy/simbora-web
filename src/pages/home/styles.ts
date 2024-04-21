import styled from 'styled-components';

export const HomeContainer = styled.div`
	background: #F0E9D1;
	width: 100vw;
	height: auto;
	display: flex;
	flex-direction: column;
`;

export const Main = styled.main`
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
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 15px;

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
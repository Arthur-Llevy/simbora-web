import styled from 'styled-components';

export const MyEventsContainer = styled.div`
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

export const MyEventsContainerHeader = styled.header`
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

export const CardContainer = styled.div`
    cursor: pointer;
`;

export const CardContainerFooter = styled.footer`
    font-weight: bold;

    span {
        font-size: 10px;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 16px;
    margin: 100px 0;
`;
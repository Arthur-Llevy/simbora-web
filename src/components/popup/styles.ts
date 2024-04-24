import styled from 'styled-components';

export const PopUpContainer = styled.div`
    position: absolute;
    background: #fff;
    width: 95%;
    height: 250px;
    border-radius: 15px;
    z-index: 1;
    inset: 50% 50% 50% 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
    	width: 17VW;
	    height: 8VH;
	    max-width: 70px;
	    max-height: 60px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    text-align: center;
`;
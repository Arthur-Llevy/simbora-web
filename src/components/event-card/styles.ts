import styled from 'styled-components';

const types = {
	outdoors: '#BA706A',
	music: '#EB9652',
	games: '#688356' 
}

export const EventCardContainer = styled.div<{ type: 'outdoors' | 'games'| 'music' }>`
	border-radius: 60px;
    width: 98%;
    display: flex;
    height: auto;
    flex-direction: column;
    max-width: 400px;
    max-height: 170px;
    background-color: ${props => types[props.type]};

     


    main  {
    	display: flex;
	    justify-content: space-around;
	    margin: 16px 0 15px 0;

	    p {
	    	font-family: "Jura", sans-serif;
		    color: #fff;
		    font-weight: bold;
		    font-size: 32px;
		    display: flex;
		    flex-direction: column;

		    span {
		    	font-size: 11px;
    			text-align: center;

    			&::before {
    				content: '';
				    display: block;
				    width: 88px;
				    height: 2px;
				    background: rgb(255 255 255 / 88%);
				    margin: 0 0 1px 0;
    			}	
		    }
	    }

	    svg {
	    	font-size: 22px;
	    }

	    button {
	    	width: 36px;
		    height: 36px;
		    border-radius: 100%;
		    border: none;
		    outline: none;
		    background: #fff;
		    box-shadow: 1px 3px 4px rgb(0 0 0 / 25%);
		    display: flex;
		    align-items: center;
		    justify-content: center;
    }
	    }
    }
`;

export const EventCardContainerHeader = styled.header`
	display: flex;
    width: 100%;
    justify-content: space-between;
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 0 16px 0;

    h2 {
    	font-size: 20px;
		padding: 20px 0 0 31px;	
    }

    div {
    	display: flex;
	    padding: 9px 0 0 31px;
	    align-items: center;
	    gap: 6px;
    }
`;
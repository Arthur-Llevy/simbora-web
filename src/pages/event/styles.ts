import styled from 'styled-components';

export const EventContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('/images/background-blured.svg');  
    background-size: contains;
    background-repeat: no-repeat;
    padding: 1px 0; 
`;

export const Button = styled.button`
    color: #000;
    width: 140px;
    height: 45px;
    padding: 10px 0;
    font-weight: bold;
    border: none;
    font-size: 20px;
    box-shadow: 1px 3px 4px rgb(0 0 0 / 25%);
    border-radius: 5px;
    background-color: #FFF;
    margin: 120px 0 0 20px;
    display: flex;
    justify-content: center;
    gap: 21px;
    align-items: center;
`;

export const EventCard = styled.div`
    background: #fff;
    border-radius: 20px;
    box-shadow: 1px 3px 4px rgb(0 0 0 / 25%);
    height: 400px;
    width: 95%;
    margin: 20px auto;
`;

export const Header = styled.header`
    padding: 18px 0 0 18px;
    display: flex;
    gap: 12px;
    height: auto;
    
    svg {
        box-shadow: 1px 3px 4px rgb(0 0 0 / 25%);
        width: 30px;
        border-radius: 100%;
        padding: 5px;
        height: 30px;
    }

    h1 {
        font-size: 23px;
    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
        box-shadow: 1px 3px 4px rgb(0 0 0 / 25%);
        width: 30px;
        border-radius: 100%;
        padding: 5px;
        height: 30px;
    }

      p {
        font-size: 35px;
        font-weight: bold;
        display: flex;
        flex-direction: column;

            span {
                font-size: 16px;
                text-align: center;
                font-family: 'istok web', sans-serif;


                &::before {
                    content: '';
                    display: block;
                    width: 88px;
                    height: 2px;
                    background: rgb(0 0 0 / 88%);
                    margin: 0 0 1px 0;
                }    
            }
        }
`;

export const Localization = styled.p`
    color: #000;
    font-weight: bold;
    font-size: 23px;
`;

export const Local = styled.p`
    color: #000;
    font-size: 14px;
`;
export const Paragraph = styled.p`
    font-family: "Jura", sans-serif;    
`

export const LocalizationSection = styled.section`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 0 0 0 18px;
 `;

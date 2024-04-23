import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: auto;
`;

export const Input = styled.input`
    width: 90vw;
	max-width: 330px;
    height: 60px;
    background: transparent;
    border: 1px solid #887E7E;
    border-radius: 5px;
    padding: 0 0 0 21px;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    display: block;

    &:invalid {
        outline: 1px solid #FC3A34;
        border: 1px solid #FC3A34;
        color: #FC3A34;
    }

    &:invalid + label {
        visibility: initial;
    }
`;

export const Label = styled.label`
    position: absolute;
    inset: 63px 0 0 0;
    visibility: hidden;
    color: #FC3A34;
    font-weight: bold;
    font-size: 13px;
`;

export const LinkTo = styled(Link)`
    color: #635C5C;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    inset: 63px 0 0 180px;
`
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
@media screen and (max-width:800px){
    justify-content: auto;
    padding:5px;
    height:50px;
    margin-bottom:10px;

`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    @media screen and (max-width:800px){
        width:70%;
        padding:0;
        padding-left: 10%;

`;

export const OptionsContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
`;

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
padding: 20px 80px;
`

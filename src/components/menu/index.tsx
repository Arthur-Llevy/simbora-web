import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { IoAddCircleOutline, IoFolderOpenOutline   } from "react-icons/io5";

import * as S from './styles';

export function Menu(){

        if (window.location.pathname !== '/login' && window.location.pathname !== '/register-user' && window.location.pathname !== '/' ) {
            return (
                <S.MenuContainer>
                    <ul>				
                        <li> 
                            <Link to='#'>
                                <IoFolderOpenOutline color="#fff"/>
                            </Link>
                        </li>
                        <li> 
                            <Link to='#'>    
                                <IoLocationOutline color="#fff" />
                            </Link>
                        </li>
                        <li> 
                            <Link to='/home'>
                                <AiOutlineHome color="#4EAA5D" />
                            </Link>
                        </li>
                        <li> 
                            <Link to='/create-event'>
                                <IoAddCircleOutline color="#fff" />
                            </Link>
                        </li>
                        <li> 
                            <Link to='/profile'>
                                <FaRegUser color="#fff" />
                            </Link>
                        </li>
                    </ul>
                </S.MenuContainer>
            );
        }

        return <></>

}
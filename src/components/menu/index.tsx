import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import * as S from './styles';

export function Menu(){

        if (window.location.pathname !== '/login' && window.location.pathname !== '/register-user' && window.location.pathname !== '/' ) {
            return (
                <S.MenuContainer>
                    <ul>				
                        <li> 
                            <Link to='#'>
                                <FaRegCalendarDays color="#fff"/>
                            </Link>
                        </li>
                        <li> 
                            <Link to='#'>    
                                <FaLocationDot color="#fff" />
                            </Link>
                        </li>
                        <li> 
                            <Link to='/home'>
                                <AiOutlineHome color="#4EAA5D" />
                            </Link>
                        </li>
                        <li> 
                            <Link to='#'>
                                <FaRegHeart color="#fff" />
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
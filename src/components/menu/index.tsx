import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import * as S from './styles';

export function Menu(){

        if (window.location.pathname !== '/login' && window.location.pathname !== '/register-user' && window.location.pathname !== '/' ) {
            return (
                <S.MenuContainer>
                    <ul>				
                        <li> 
                            <FaRegCalendarDays color="#fff"/>
                        </li>
                        <li> 
                            <FaLocationDot color="#fff" />
                        </li>
                        <li> 
                            <AiOutlineHome color="#4EAA5D" />
                        </li>
                        <li> 
                            <FaRegHeart color="#fff" />
                        </li>
                        <li> 
                            <FaRegUser color="#fff" />
                        </li>
                    </ul>
                </S.MenuContainer>
            );
        }

        return <></>

}
import { Link } from 'react-router-dom';
import { useState, useRef, MutableRefObject } from 'react';

import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline, IoAddOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser, FaRegFolderOpen } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";

import * as S from './styles';

function MenuPopup({ ref }: { ref: MutableRefObject<HTMLDivElement | null> }) {
    return (
        <S.MenuPopupContainer ref={ref}>
            <ul>
                <li><FaRegUser /></li>
                <li><FaRegFolderOpen /></li>
                <li><IoAddOutline /></li>
            </ul>
        </S.MenuPopupContainer>
    );
}

export function Menu(){

    const menuPopupRef = useRef(null);
    const [isMenuPopupVisible, setIsMenuPopupVisible] = useState<boolean>(false);

    const toggleMenu = () => {

        if (isMenuPopupVisible && menuPopupRef.current) {
            menuPopupRef.current.style.opacity = '1'
        }

        setIsMenuPopupVisible(previousValue => !previousValue)
    };

        if (window.location.pathname !== '/login' && window.location.pathname !== '/register-user' && window.location.pathname !== '/' ) {
            return (
                <S.MenuContainer>
                    <ul>				
                        <li> 
                            <Link to='/my-events'>
                                <CiCalendar color="#fff"/>
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
                                <FaRegHeart color="#fff" />
                            </Link>
                        </li>
                        <li> 
                            <Link to='#' onClick={toggleMenu}>
                                <MdMoreHoriz color="#fff" />
                            </Link>
                            {isMenuPopupVisible && <MenuPopup ref={menuPopupRef}/>}
                        </li>
                    </ul>
                </S.MenuContainer>
            );
        }

        return <></>

}
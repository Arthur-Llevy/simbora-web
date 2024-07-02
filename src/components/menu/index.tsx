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
                <li><Link to="/profile"><FaRegUser /></Link></li>
                <li><Link to="/my-events"><FaRegFolderOpen /></Link></li>
                <li><Link to="/create-event"><IoAddOutline /></Link></li>
            </ul>
        </S.MenuPopupContainer>
    );
}

export function Menu(){

    const menuPopupRef = useRef<HTMLDivElement>(null);
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
                            <Link to='#'>
                                <CiCalendar color="#fff"/>
                            </Link>
                        </li>
                        <li> 
                            <Link to='/events-by-location'>    
                                <IoLocationOutline color="#fff" />
                            </Link>
                        </li>
                        <li> 
                            <Link to='/home'>
                                <AiOutlineHome color="#4EAA5D" />
                            </Link>
                        </li>
                        <li> 
                            <Link to='/my-events'>
                                <FaRegHeart color="#fff" />
                            </Link>
                        </li>
                        <li> 
                            <MdMoreHoriz color="#fff" onClick={toggleMenu}/>
                            {isMenuPopupVisible && <MenuPopup ref={menuPopupRef}/>}
                        </li>
                    </ul>
                </S.MenuContainer>
            );
        }

        return <></>

}
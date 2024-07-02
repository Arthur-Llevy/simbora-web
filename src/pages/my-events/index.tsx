import * as S from './styles';
import { LuBell } from "react-icons/lu";
import { useEffect } from 'react';
import backgroundOne from '/images/background-one.svg';

// Components
import { Menu } from '../../components/menu/'; 

const Card = () => {
	return (
		<S.CardContainer>

			<S.CardContainerFooter>
				<img src={backgroundOne} alt="background" />
				<p>Favoritos</p>
				<span>3 eventos</span>
			</S.CardContainerFooter>
		</S.CardContainer>
	)
}

export function MyEvents(){

	useEffect(() => {
		document.title = 'Simbora | Meus Eventos'
	}, [])

	return (
		<S.MyEventsContainer>
            <S.MyEventsContainerHeader>
                <h1>Meus Eventos</h1>
                <LuBell className="svg" />
                <S.CardsContainer>
                	<Card />
                	<Card />
                	<Card />
                </S.CardsContainer>
            </S.MyEventsContainerHeader>
        </S.MyEventsContainer>
	)
}
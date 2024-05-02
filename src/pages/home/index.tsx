// Components
import { EventCard } from '../../components/event-card/';
import { Menu } from '../../components/menu/';

// API
import { getAllEvents } from '../../services/events-api/get-all-events';
import { getUserData } from '../../services/events-api/get-user-data';

import { useState, useEffect, useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import { EventType } from './types';
import * as S from './styles';

export function Home() {

	const [events, setEvents] = useState<EventType[]>([]);
	const { userName } = sessionStorage;
	const { userData } = useContext(UserDataContext);

	const fethEvents = async () => {
		const response = await getAllEvents();
		setEvents(response.data.events);
	};

	const fetchUserData = async () => {
		const response = await getUserData(sessionStorage.getItem('email')!, sessionStorage.getItem('password')!)
		userData.user = response
	};	

	useEffect(() => {
		fethEvents();	
		fetchUserData()
	}, [])

	return (
		<S.HomeContainer>
			<S.HomeContainerHeader>
				<h1>Olá, { userName }</h1>
				<img src="./images/logo.svg" alt="logo icon"/> 
			</S.HomeContainerHeader>
			<S.Main>
				<S.MainHeader>
					<select>
				 		<option value="janeiro">Janeiro</option>
						<option value="fevereiro">Fevereiro</option>
						<option value="março">Março</option>
						<option value="abril">Abril</option>
						<option value="maio">Maio</option>
						<option value="junho">Junho</option>
						<option value="julho">Julho</option>
						<option value="agosto">Agosto</option>
						<option value="setembro">Setembro</option>
						<option value="outubro">Outubro</option>
						<option value="novembro">Novembro</option>
						<option value="dezembro">Dezembro</option>

					</select>
					<input placeholder="Pesquisar"/>				
				</S.MainHeader>
				<S.EventsContainer>
					{events.length !== 0 ? events!.map(event => (
						<EventCard key={event.id}
							name={event.name}
							localization={event.localization}
							startsAt={event.startsAt}
							isFavorited={event.isFavorited}
							endsAt={event.endsAt}
							type={event.type}
							linkTo={event.id}
						/>
					)) : <>Carregando</>}
				</S.EventsContainer>
			</S.Main>
			<Menu />
		</S.HomeContainer>
	);	
}
import { EventCard } from '../../components/event-card/';
import { getAllEvents } from '../../services/api/';
import { useState, useEffect } from 'react';
import { EventType } from './types';
import * as S from './styles';

export function Home() {

	const [events, setEvents] = useState<EventType[]>([]);

	const fethEvents = async () => {
		const response = await getAllEvents();
		setEvents(response.events);
	};

	useEffect(() => {
		fethEvents();	
	}, [])


	return (
		<S.HomeContainer>
			<S.HomeContainerHeader>
				<h1>Olá, Arthur</h1>
				<img src="./images/logo.svg" alt="logo icon"/> 
			</S.HomeContainerHeader>
			<main>
				<div>
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
				</div>
				<S.EventsContainer>
					{events.length !== 0 ? events!.map(event => (
						<EventCard key={event.id}
							name={event.name}
							localization={event.localization}
							startsAt={event.startsAt}
							isFavorited={event.isFavorited}
							endsAt={event.endsAt}
							type={event.type}
						/>
					)) : <>Carregando</>}
				</S.EventsContainer>
			</main>
		</S.HomeContainer>
	);	
}
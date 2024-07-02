// Components
import { EventCard } from '../../components/event-card/';

// API
import { getAllEvents } from '../../services/events-api/get-all-events';
import { getUserData } from '../../services/events-api/get-user-data';

import { LuBell } from "react-icons/lu";
import { useState, useEffect, useContext, FormEvent } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import { EventType } from './types';
import * as S from './styles';

export function Home() {

    const [events, setEvents] = useState<EventType[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);
    const { userName } = sessionStorage;
    const { userData } = useContext(UserDataContext);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchEvents = async () => {
        const response = await getAllEvents();
        setEvents(response.data.events);
        setFilteredEvents(response.data.events);
    };

    const fetchUserData = async () => {
        const response = await getUserData(sessionStorage.getItem('email')!, sessionStorage.getItem('password')!)
        userData.user = response
    };

    useEffect(() => {
        fetchEvents();
        fetchUserData();
        document.title = 'Simbora | Home';
    }, []);

    const filterEvents = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.toLowerCase();
        setSearchTerm(value);

        const filtered = events.filter(event =>
            event.name.toLowerCase().includes(value) ||
            event.localization.toLowerCase().includes(value)
        );
        setFilteredEvents(filtered);
    };

    return (
        <S.HomeContainer>
            <S.HomeContainerHeader>
                <h1>Olá, {userName}</h1>
                <LuBell className="svg" />
            </S.HomeContainerHeader>
            <S.Main>
                <S.MainHeader>
                    <input
                        placeholder="Pesquise por um evento"
                        value={searchTerm}
                        onInput={e => filterEvents(e)}
                    />
                </S.MainHeader>
                <S.EventsContainer>
                    {filteredEvents.length !== 0 ? filteredEvents.map(event => (
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
        </S.HomeContainer>
    );
}

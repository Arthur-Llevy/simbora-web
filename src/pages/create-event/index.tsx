import * as S from './styles';
import { FaStar } from "react-icons/fa";
import { createEvent } from '../../services/events-api/create-event';
import { useState } from 'react';

import { Button } from '../../shared/components/button';
import { Menu } from '../../components/menu/';

export function CreateEvent(){

    const { userName, eventsAttended, eventsCreated } = sessionStorage;

    const [name, setName] = useState('');
    const [localization, setLocalization] = useState('')
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [startsAt, setStartsAt] = useState('');
    const [endsAt, setEndsAt] = useState('');

    const create = async () => {
        await createEvent(name, localization, type, date, startsAt, endsAt);
    };

    return (
        <S.CreateEventContainer>
            <S.Header>
                <S.Image src='/images/profile.svg' />
                <S.Section>
                    <S.Name>{userName}</S.Name>
                    <S.Span>Eventos Participados: {eventsAttended}</S.Span>
                    <S.Span>Eventos Criados: {eventsCreated}</S.Span>
                    <S.StarsContainer>
                        <FaStar color='#FAE20A'/>
                        <FaStar color='#FAE20A'/>
                        <FaStar color='#FAE20A'/>
                        <FaStar color='#FAE20A'/>
                        <FaStar color='#4F5763'/>
                    </S.StarsContainer>
                </S.Section>
            </S.Header>
            <S.Main>
                <S.Title>Informações do evento</S.Title>
                <S.InputContainer>
                    <S.Label htmlFor='name'>Nome</S.Label>
                    <S.Input 
                        type='text'
                        placeholder='Ex.: campeonato de xadrez'
                        id='name'
                        onChange={e => setName(e.target.value)}
                    />
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='localization'>Local</S.Label>
                    <S.Input 
                        type='text'
                        placeholder='Ex.: Avenida Boa Viagem' 
                        id='localization' 
                        onChange={e => setLocalization(e.target.value)}
                    />
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='start'>Início</S.Label>
                    <S.Input 
                        type='text'
                        placeholder='Ex.: 12:00' 
                        id='start' 
                        onChange={e => setStartsAt(e.target.value)}
                    />
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='end'>Fim</S.Label>
                    <S.Input 
                        type='text'
                        placeholder='Ex.: 15:00' 
                        id='end' 
                        onChange={e => setEndsAt(e.target.value)}
                    />
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='type'>Tipo</S.Label>
                    <S.Input 
                        type='tipo'
                        placeholder='Ao ar livre' 
                        id='type' 
                        onChange={e => setType(e.target.value)}
                    />
                </S.InputContainer>
                 <S.InputContainer>
                    <S.Label htmlFor='date'>Data</S.Label>
                    <S.Input 
                        type='text'
                        placeholder='Ex.: 12-02-2024' 
                        id='date' 
                        onChange={e => setDate(e.target.value)}
                    />
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='genres'>Gêneros</S.Label>
                    <S.Input 
                        type='text' 
                        placeholder='Ex.: jogos, música' 
                        id='genres'/>
                </S.InputContainer>
                <Button tertiary onclick={create}>Criar evento</Button>
            </S.Main>
            <Menu />
        </S.CreateEventContainer>
    )
}
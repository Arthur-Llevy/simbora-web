import * as S from './styles';
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiBellAlert } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Button } from '../../shared/components/button/';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EventType } from './types';

// API
import { getOneEvent } from '../../services/events-api/get-one-event';

export function Event(){

    const [event, setEvent] = useState<EventType>({
        id: 0,
        date: '',
        name: '',
        localization: '',
        startsAt: '',
        endsAt: ''
    });

    const { id } = useParams<{ id: string }>()

    async function fecthEvent(){      
        try {
            const response = await getOneEvent(Number(id));
            setEvent(response.event)
        } catch (err) {
            return 
        }
    }

    useEffect(() => {
        fecthEvent()
    }, [])

    return (
        <S.EventContainer>
            <S.Button>
                <IoIosArrowRoundBack color='#000'/>               
                <Link to='/home'>
                    Voltar
                </Link>
            </S.Button>
            <S.EventCard>
                <S.Header>
                    <h1>{ event.name }</h1>
                    <HiBellAlert />
                    <IoIosShareAlt />
                </S.Header>
                <S.Image src='/images/event-photo.svg'/>
                <S.LocalizationSection>
                    <FaLocationDot size='15px' color='rgb(0 0 0 / 73%)'/>
                    <S.Localization>
                        Ponto de encontro:
                        <S.Local>{ event.localization } </S.Local>
                    </S.Localization>
                    
                </S.LocalizationSection>
                <S.Section>
                    <S.Paragraph>{ event.startsAt } <span>Início</span></S.Paragraph>
                    <FaHeart />
                    <S.Paragraph>{ event.endsAt } <span>Fim</span></S.Paragraph>
                </S.Section>
                <Button largeSize tertiary>
                    Participar!
                </Button>
            </S.EventCard>
        </S.EventContainer>
    )
}
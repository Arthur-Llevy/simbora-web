import * as S from './styles';
import { FaStar } from "react-icons/fa";

import { Button } from '../../shared/components/button';

export function CreateEvent(){

    const { userName, eventsAttended, eventsCreated, email, phone } = sessionStorage

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
                    <S.Input type='text' placeholder='Ex.: campeonato de xadrez' id='name'/>
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='localization'>Local</S.Label>
                    <S.Input type='text' placeholder='Ex.: Avenida Boa Viagem' id='localization'/>
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='attendeeAmmount'>Número máximo de participantes</S.Label>
                    <S.Input type='number' placeholder='Ex.: 50' id='attendeeAmmount'/>
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='genres'>Gêneros</S.Label>
                    <S.Input type='text' placeholder='Ex.: jogos, música' id='genres'/>
                </S.InputContainer>
                <Button tertiary>Criar evento</Button>
            </S.Main>
        </S.CreateEventContainer>
    )
}
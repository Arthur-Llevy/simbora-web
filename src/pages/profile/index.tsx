import * as S from './styles';
import { Button } from '../../shared/components/button/';

// Icons
import { FaStar } from "react-icons/fa";

export function Profile(){

    const { userName, eventsAttended, eventsCreated } = sessionStorage

    return (
        <S.ProfileContainer>
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
                <S.Title>Informações de contato</S.Title>
                <S.InputContainer>
                    <S.Label htmlFor='name'>Nome</S.Label>
                    <S.Input type='text' placeholder='Arthur' id='name'/>
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='email'>E-mail</S.Label>
                    <S.Input type='email' placeholder='arthur@gmail.com' id='name' disabled/>
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label htmlFor='tel'>Telefone</S.Label>
                    <S.Input type='tel' placeholder='(81) 9 9999-9999' id='tel' disabled/>
                </S.InputContainer>
                <S.InputContainer>
                    <S.Label>Preferências</S.Label>
                    <S.Preference>Jogos</S.Preference>
                </S.InputContainer>
                <Button quartenary>Editar</Button>
            </S.Main>
        </S.ProfileContainer>
    );
}
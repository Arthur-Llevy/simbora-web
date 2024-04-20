import * as S from './styles';
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiBellAlert } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Button } from '../../shared/components/button/'

export function Event(){
    return (
        <S.EventContainer>
            <S.Button>
                <IoIosArrowRoundBack color='#000'/>               
                Voltar
            </S.Button>
            <S.EventCard>
                <S.Header>
                    <h1>Maratona De Ciclismo</h1>
                    <HiBellAlert />
                    <IoIosShareAlt />
                </S.Header>
                <S.LocalizationSection>
                    <FaLocationDot size='15px' color='rgb(0 0 0 / 73%)'/>
                    <S.Localization>
                        Ponto de encontro:
                        <S.Local>Av. Norte</S.Local>
                    </S.Localization>
                    
                </S.LocalizationSection>
                <S.Section>
                    <S.Paragraph>12:30 <span>Início</span></S.Paragraph>
                    <FaHeart />
                    <S.Paragraph>12:30 <span>Fim</span></S.Paragraph>
                </S.Section>
                <Button largeSize tertiary>
                    Participar!
                </Button>
            </S.EventCard>
        </S.EventContainer>
    )
}
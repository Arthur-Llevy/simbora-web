import * as S from './styles';

// Icons
import { FaStar } from "react-icons/fa";

export function Profile(){
    return (
        <S.ProfileContainer>
            <S.Header>
                <S.Image src='/images/profile.svg' />
                <S.Section>
                    <S.Name>Arthur</S.Name>
                    <S.Span>Eventos Participados: 2</S.Span>
                    <S.Span>Eventos Criados: 5</S.Span>
                    <S.StarsContainer>
                        <FaStar color='#FAE20A'/>
                        <FaStar color='#FAE20A'/>
                        <FaStar color='#FAE20A'/>
                        <FaStar color='#FAE20A'/>
                        <FaStar color='#4F5763'/>
                    </S.StarsContainer>
                </S.Section>
            </S.Header>
        </S.ProfileContainer>
    );
}
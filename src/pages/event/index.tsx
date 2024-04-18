import * as S from './styles';
import { IoIosArrowRoundBack } from "react-icons/io";

export function Event(){
    return (
        <S.EventContainer>
            <S.Image src='/images/logo.svg'/>
            <S.Button>                
                <IoIosArrowRoundBack color='#000'/>
                Voltar
            </S.Button>
        </S.EventContainer>
    )
}
import { GrStatusWarning } from "react-icons/gr";
import { BiCheckCircle } from "react-icons/bi";
import { Button } from '../../shared/components/button/';
import { PopUpProps } from './types';
import * as S from './styles';

export function PopUp({ type, children, onclick }: PopUpProps){
	return (
		<S.PopUpContainer>
			{type === 'error' ? <GrStatusWarning color="#E6060A"/> : <BiCheckCircle color="#688356"/> }
			<S.Paragraph>{children}</S.Paragraph>		
			{type === 'error' ? (
				<Button secondary onclick={onclick !== null ? () => onclick(false) : () => ''}>Ok</Button>
			) : (
				<Button primary onclick={onclick !== null ? () => onclick(false) : () => ''}>Ok</Button>
			)}
		</S.PopUpContainer>
	);
}
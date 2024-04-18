import { InputProps } from './types';
import * as S from './styles';

export function Input({ type, placeholder, exceptionText, alternateLinkText, to, onchange }: InputProps){
	return (
		<S.Container>
			<S.Input 
				type={type}
				placeholder={placeholder}
				onChange={onchange !== undefined ? (e) => onchange(e.target.value) : () => ''}			
		 	/>

		 	{exceptionText !== '' ? (
		 		<S.Label>{exceptionText}</S.Label>
		 	) : <></>}

		 	{alternateLinkText !== '' ? (
		 		<S.LinkTo to={to!}>{alternateLinkText}</S.LinkTo>
		 	) : <></>}
		</S.Container>
	);
}
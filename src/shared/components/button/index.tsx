import * as S from './styles';
import { ButtonProps } from './types';

export function Button ({ children, largeSize, primary, secondary, tertiary, quartenary, icon }: ButtonProps) {


	return (
		<S.Button
			largeSize={largeSize}
			primary={primary}
			secondary={secondary}
			tertiary={tertiary}
			quartenary={quartenary}
		>	
			{icon && icon}
			{children}
		</S.Button>
	);
}
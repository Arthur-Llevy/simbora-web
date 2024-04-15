import * as S from './styles';
import { ButtonProps } from './types';

export function Button ({ children }: ButtonProps) {
	return (
		<S.Button>
			{children}
		</S.Button>
	);
}
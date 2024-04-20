import { ReactNode } from 'react';

type ButtonProps = {
	largeSize?: boolean;
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	quartenary?: boolean;
	children: ReactNode;
	icon?: ReactNode;
	onclick?: (...args: any) => any;
};

export type { ButtonProps };
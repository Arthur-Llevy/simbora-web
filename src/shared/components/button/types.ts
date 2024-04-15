import { ReactNode } from 'react';

type ButtonProps = {
	largeSize?: boolean;
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	children: ReactNode;
};

export type { ButtonProps };
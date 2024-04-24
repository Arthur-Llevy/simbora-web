import { ReactNode } from 'react';

type PopUpProps = {
	type?: 'error' | '';
	children: ReactNode;
	onclick: (...args: any) => any;
};

export type { PopUpProps };
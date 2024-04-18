type InputProps = {
	type: string;
	placeholder: string;
	exceptionText?: string;
	alternateLinkText?: string;
	to?: string; 	
	onchange?: (...args: any) => any
};

export type { InputProps };
import { ComponentProps, ReactNode } from 'react';

export type FormProps = {
	label: string;
	children: ReactNode;
	className?: string;
} & ComponentProps<'form'>;

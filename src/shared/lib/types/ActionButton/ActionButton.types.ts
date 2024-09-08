import { ComponentProps } from 'react';

export type ActionButton = {
	isActive: boolean;
} & ComponentProps<'button'>;

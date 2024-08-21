import { ConfirmationButton } from '@shared/ui';
import { ComponentProps, FC } from 'react';

export const AcceptButton: FC<ComponentProps<'button'>> = ({ ...buttonProps }) => {
	return (
		<ConfirmationButton {...buttonProps}>
			<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M6 12l4 4 8-8' stroke='#FFFFFF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		</ConfirmationButton>
	);
};

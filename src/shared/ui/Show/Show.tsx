import { Button } from '@shared/ui';
import { ComponentProps, FC, useState } from 'react';

type Props = {
	isHidden: boolean;
} & ComponentProps<'button'>;

export const Show: FC<Props> = ({ isHidden, ...buttonProps }) => {
	if (isHidden)
		return (
			<Button noneBordered {...buttonProps}>
				<svg xmlns='http://www.w3.org/2000/svg' width='22' height='14' fill='none'>
					<path
						fill='#7B7B7B'
						d='M16.383 10.162c1.19-.784 2.213-1.87 3.436-3.212a.648.648 0 0 0 0-.898c-1.425-1.565-2.552-2.788-3.987-3.583-1.487-.823-3.22-1.15-5.764-1.15-1.473 0-2.684.11-3.736.36L7.8 2.92c.64-.084 1.378-.126 2.249-.127l.011.558c-.5 0-1.038.08-1.475.231l1.47 1.24c1.056.024 1.907.743 1.935 1.634l1.47 1.24c.179-.368.277-.771.277-1.194 0-1.73-1.632-3.132-3.677-3.151l-.011-.558c-.006 0 .006 0 0 0 2.367 0 3.734.305 4.825.909 1.031.571 1.904 1.443 3.15 2.8-1.118 1.211-1.96 2.039-2.887 2.61l1.246 1.05Z'
					/>
					<path
						fill='#7B7B7B'
						fillRule='evenodd'
						d='m14.853 10.955-1.342-1.133c-.906.258-2.027.387-3.56.388l.007-.555H10c.924 0 1.77-.283 2.422-.752L11.18 7.855a2.235 2.235 0 0 1-1.202.326c-1.09-.01-1.97-.758-1.97-1.68 0-.373.145-.717.388-.996L7.154 4.457c-.556.55-.891 1.264-.891 2.044 0 1.73 1.65 3.135 3.695 3.154l-.007.555h-.02c-2.366 0-3.714-.305-4.805-.909-1.031-.571-1.904-1.443-3.15-2.8 1.246-1.35 2.15-2.224 3.21-2.795.22-.12.45-.227.696-.322L4.587 2.29a8.078 8.078 0 0 0-.342.174C2.773 3.26 1.613 4.48.181 6.052a.648.648 0 0 0 0 .898c1.425 1.564 2.552 2.788 3.987 3.583 1.487.823 3.22 1.15 5.764 1.15 2.057 0 3.603-.213 4.921-.728Z'
						clipRule='evenodd'
					/>
					<path
						stroke='#7B7B7B'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M16.168 12 3.135 1'
					/>
				</svg>
			</Button>
		);

	return (
		<Button noneBordered {...buttonProps}>
			<svg xmlns='http://www.w3.org/2000/svg' width='22' height='14' fill='none'>
				<path
					stroke='#70DA55'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1.5'
					d='M10.925 1C5.544 1 4.175 2.705 1 7c3.176 4.295 4.544 6 9.925 6m.15-12c5.381 0 6.75 1.705 9.925 6-3.176 4.295-4.544 6-9.925 6m3.063-6c0 1.802-1.405 3.262-3.138 3.262-1.733 0-3.138-1.46-3.138-3.262S9.267 3.738 11 3.738c1.733 0 3.138 1.46 3.138 3.262Z'
				/>
			</svg>
		</Button>
	);
};

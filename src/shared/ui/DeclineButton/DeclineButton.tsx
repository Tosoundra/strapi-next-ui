import { ConfirmationButton } from '@ui/index';
import { ComponentProps, FC } from 'react';

export const DeclineButton: FC<ComponentProps<'button'>> = ({ ...buttonProps }) => {
	return (
		<ConfirmationButton {...buttonProps}>
			<svg width='30' height='20' viewBox='0 0 30 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M0 5C0 2.23858 2.23858 0 5 0H25C27.7614 0 30 2.23858 30 5V15C30 17.7614 27.7614 20 25 20H5C2.23858 20 0 17.7614 0 15V5Z'
					fill='#DA5555'
				/>
				<g clipPath='url(#clip0_302_338)'>
					<path d='M8 3H22V17H8V3Z' fill='white' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M18.5356 12.65C18.78 12.8937 18.78 13.2938 18.5356 13.5375C18.2919 13.7813 17.8956 13.7813 17.6513 13.5375L15.0037 10.8875L12.3375 13.5562C12.0912 13.8 11.6925 13.8 11.4463 13.5562C11.2006 13.3062 11.2006 12.9063 11.4463 12.6625L14.1125 9.99374L11.465 7.35001C11.2206 7.10626 11.2206 6.70623 11.465 6.46248C11.7081 6.21873 12.1044 6.21873 12.3487 6.46248L14.9963 9.11247L17.6825 6.42502C17.9287 6.18127 18.3269 6.18127 18.5731 6.42502C18.8187 6.67502 18.8187 7.06873 18.5731 7.31873L15.8875 10.0063L18.5356 12.65ZM15 0C9.47688 0 5 4.475 5 10C5 15.525 9.47688 20 15 20C20.5231 20 25 15.525 25 10C25 4.475 20.5231 0 15 0Z'
						fill='#DA5555'
					/>
				</g>
			</svg>
		</ConfirmationButton>
	);
};

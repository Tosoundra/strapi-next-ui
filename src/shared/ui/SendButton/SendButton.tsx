import { Button } from '@shared/ui';
import { ComponentProps, FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const SendButton: FC<ComponentProps<'button'>> = ({ className, onClick }) => {
	return (
		<Button onClick={onClick} className={classNames(styles['send-button'], className)} type='submit'>
			<svg xmlns='http://www.w3.org/2000/svg' width='26' height='23' fill='none'>
				<path
					fill='#fff'
					stroke='#8E8E8E'
					d='M22.514 1.144a1.752 1.752 0 0 1 1.804.25c.251.203.445.471.56.777.117.306.15.638.098.961l-2.708 16.826c-.263 1.623-2.001 2.554-3.454 1.745-1.216-.676-3.022-1.718-4.646-2.805-.812-.545-3.299-2.287-2.993-3.528.262-1.06 4.442-5.045 6.83-7.414.937-.93.51-1.468-.597-.611-2.749 2.125-7.162 5.358-8.621 6.268-1.288.802-1.959.94-2.761.802-1.464-.25-2.822-.636-3.93-1.107-1.497-.636-1.425-2.744-.001-3.358l20.419-8.806Z'
				/>
			</svg>
		</Button>
	);
};

import { Button } from '@ui/index';
import Image from 'next/image';
import { ComponentProps, FC } from 'react';
import styles from './styles.module.scss';

type Props = {
	tabName: 'Описание проблемы' | 'Дополнительные файлы' | 'Комментарии' | 'Обсуждение';
} & ComponentProps<'button'>;

export const GoToButton: FC<Props> = ({ tabName, ...componentProps }) => {
	return (
		<Button className={styles.button} {...componentProps}>
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 21 16'>
				<path
					fill='#9FD984'
					d='M20.707 8.707a1 1 0 0 0 0-1.414L14.343.929a1 1 0 0 0-1.414 1.414L18.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM0 9h20V7H0v2z'
				/>
			</svg>
		</Button>
	);
};

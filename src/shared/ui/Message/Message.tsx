import { FC } from 'react';
import styles from './styles.module.scss';
import { Inter } from 'next/font/google';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

type Props = {
	user: string;
	time: string;
	message: string;
};

export const Message: FC<Props> = ({ user, time, message }) => {
	return (
		<div className={styles.message}>
			<div className={styles.information}>
				<span className={styles.user}>{user}</span>
				<span className={styles.time}>{time}</span>
			</div>
			<p className={classNames(styles.text, inter.className)}>{message}</p>
		</div>
	);
};

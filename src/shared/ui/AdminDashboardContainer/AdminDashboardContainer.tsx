import classNames from 'classnames';
import styles from './styles.module.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

const inter = Inter({ subsets: ['cyrillic'] });

type Props = {
	children: ReactNode;
	tabName: string;
	href: string;
};

export const AdminDashboardContainer: FC<Props> = ({ children, tabName, href }) => {
	return (
		<section className={styles.dashboard}>
			<div className={styles.tabs}>
				<div className={classNames(styles.tab, inter.className)}>{tabName}</div>
				<Link href={href}>
					<Image width={40} height={40} src='/icons/ADD_ICON.svg' alt='Добавить новую сущность' />
				</Link>
			</div>
			<div className={styles.content}>{children}</div>
		</section>
	);
};

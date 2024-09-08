'use client';

import { CREATE_ROUTE } from '@shared/lib/constants';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

const inter = Inter({ subsets: ['cyrillic'] });

type Props = {
	children: ReactNode;
	tabName: string;
	href: string;
};

export const AdminDashboardContainer: FC<Props> = ({ children, tabName, href }) => {
	const pathname = usePathname();

	const isDisabled = pathname.includes(CREATE_ROUTE);

	return (
		<section className={styles.dashboard}>
			<div className={styles.tabs}>
				<div className={classNames(styles.tab, inter.className)}>{tabName}</div>
				<Link href={href}>
					<svg width='40' height='40' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'>
						<circle cx='25' cy='25' r='20' fill={isDisabled ? '#CCCCCC' : '#70DA55'} />
						<line x1='15' y1='25' x2='35' y2='25' stroke='white' strokeWidth='4' />
						<line x1='25' y1='15' x2='25' y2='35' stroke='white' strokeWidth='4' />
					</svg>
				</Link>
			</div>
			<div className={styles.content}>{children}</div>
		</section>
	);
};

'use client';

import { Logout, RonixLogo } from '@shared/ui';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styles from './styles.module.scss';

export const Header: FC = () => {
	const session = useSession();
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<Link href='/applications'>
				<RonixLogo className={styles.logo} />
			</Link>

			{session?.status === 'authenticated' && (
				<nav className={styles.navigation}>
					<Logout />
					<Link href='/organizations'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='25'
							height='25'
							version='1.0'
							viewBox='0 0 512 512'
							fill={pathname === '/organizations' ? '#70da55' : '#EAEAEA'}>
							<path d='M242 16.6c-29.8 3.8-55.1 16.2-76.1 37.3-18.8 18.9-29.9 39.2-35.5 65.1-2.6 11.9-2.6 38.1 0 50 5.5 25.7 16.9 46.6 35.5 65.1 18.5 18.6 39.4 30 65.1 35.5 11.9 2.6 38.1 2.6 50 0 25.9-5.6 46.2-16.7 65.1-35.5 18.6-18.5 30-39.4 35.5-65.1 2.6-11.9 2.6-38.1 0-50-5.5-25.7-16.9-46.6-35.5-65.1-18.5-18.5-38-29.3-63.1-35-8.3-1.9-33.1-3.3-41-2.3zM175 288.4c-6.9 2.6-23.7 11.5-32.5 17.3-53.9 35.6-87.3 91.2-93.6 155.8-2 20.6-.8 26.5 6.5 31.9l2.7 2.1h395.8l2.7-2.1c7.3-5.4 8.5-11.3 6.5-31.9-7.1-73.1-49.9-135.7-114.4-167.6-16.2-8-16.7-8-29.1-3.1-23.7 9.5-39.4 12.6-63.6 12.6-24.1 0-40.2-3.2-63.3-12.5-10.5-4.2-12.3-4.5-17.7-2.5z' />
						</svg>
					</Link>

					<Link href='/applications'>
						<svg xmlns='http://www.w3.org/2000/svg' width='25' height='26' fill='none'>
							<mask id='a' fill='#fff'>
								<path
									fillRule='evenodd'
									d='M0 4c0-2.20914 1.79086-4 4-4h17c2.2091 0 4 1.79086 4 4v18c0 2.2091-1.7909 4-4 4H4c-2.20914 0-4-1.7909-4-4V4Zm6 4c0-.55228.44772-1 1-1h11c.5523 0 1 .44772 1 1 0 .55229-.4477 1-1 1H7c-.55228 0-1-.44771-1-1Zm1 4c-.55228 0-1 .4477-1 1s.44772 1 1 1h11c.5523 0 1-.4477 1-1s-.4477-1-1-1H7Z'
									clipRule='evenodd'
								/>
							</mask>
							<path
								fill={pathname === '/applications' ? '#70da55' : '#EAEAEA'}
								fillRule='evenodd'
								d='M0 4c0-2.20914 1.79086-4 4-4h17c2.2091 0 4 1.79086 4 4v18c0 2.2091-1.7909 4-4 4H4c-2.20914 0-4-1.7909-4-4V4Zm6 4c0-.55228.44772-1 1-1h11c.5523 0 1 .44772 1 1 0 .55229-.4477 1-1 1H7c-.55228 0-1-.44771-1-1Zm1 4c-.55228 0-1 .4477-1 1s.44772 1 1 1h11c.5523 0 1-.4477 1-1s-.4477-1-1-1H7Z'
								clipRule='evenodd'
							/>
							<path
								fill='#fff'
								d='M6 18c0-.5523.44772-1 1-1h11c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.55228 0-1-.4477-1-1Z'
							/>
						</svg>
					</Link>
					{/* <Link href='/create-application' className={styles.link}>
							<Image width={27} height={27} src={'/icons/CREATE_APPLICATION_ICON.svg'} alt='Создать заявку' />
						</Link> */}
				</nav>
			)}
		</header>
	);
};

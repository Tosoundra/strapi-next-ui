import { authConfig } from '@config/authConfig';
import { getServerSession } from 'next-auth';
import { RonixLogo } from '@ui/RonixLogo/RonixLogo';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './styles.module.scss';
import { Logout } from '@ui/index';



export const Header: FC = async () => {
	// const session = await getServerSession(authConfig);
	// console.log(session, 'header');

	return (
		<header className={styles.header}>
			<Link href='/applications'>
				<RonixLogo className={styles.logo} />
			</Link>

			{true && (
				<>
					<nav className={styles.navigation}>
						<Logout />
						<Link href='/create-application' className={styles.link}>
							<Image width={27} height={27} src={'/icons/CREATE_APPLICATION_ICON.svg'} alt='Создать заявку' />
						</Link>
					</nav>
				</>
			)}
		</header>
	);
};

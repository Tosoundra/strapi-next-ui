import { authConfig } from '@config/auth';

import { RonixLogo } from '@ui/RonixLogo/RonixLogo';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './styles.module.scss';
import Logout from '@ui/Logout/Logout';

export const Header: FC = () => {
	const session = getServerSession(authConfig);

	return (
		<header className={styles.header}>
			<RonixLogo className={styles.logo} />

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

import { Logout } from '@ui/index';
import { RonixLogo } from '@ui/RonixLogo/RonixLogo';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './styles.module.scss';

export const Header: FC = async () => {
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

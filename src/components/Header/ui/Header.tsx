'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

export const Header = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch(`http://localhost:1337/api/users`);
			const data = await response.json();
			const user = data[0];
			setUser(user);
		};

		getUsers();
	}, []);

	return (
		<header className={styles.header}>
			<h1>База заявок Ronix Systems</h1>
			{/* <span>{user.username}</span> */}
			<nav className={styles.navigation}>
				<Link href='/' className={styles.link}>
					Выйти из личного кабинета
				</Link>
				<Link href='/profile' className={styles.link}>
					Вернуться к списку заявок
				</Link>
			</nav>
		</header>
	);
};

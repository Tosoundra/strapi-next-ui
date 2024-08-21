'use client';

import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { FC } from 'react';

export const Logout: FC = () => {
	const logoutHandler = () => {
		signOut({ callbackUrl: '/' });
		fetch(`${window.location.origin}/api/auth/logout`, { method: 'DELETE' });
	};

	return (
		<Link href='/' onClick={logoutHandler}>
			<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='none'>
				<mask id='a' fill='#fff'>
					<path d='M13 24.573c0 .788-.641 1.435-1.425 1.349a13 13 0 0 1 0-25.844C12.36-.008 13 .64 13 1.428c0 .788-.642 1.416-1.423 1.527a10.145 10.145 0 0 0 0 20.09c.78.11 1.423.74 1.423 1.528Z' />
				</mask>
				<path
					fill='#F1F4F1'
					stroke='#70DA55'
					strokeWidth='4'
					d='M13 24.573c0 .788-.641 1.435-1.425 1.349a13 13 0 0 1 0-25.844C12.36-.008 13 .64 13 1.428c0 .788-.642 1.416-1.423 1.527a10.145 10.145 0 0 0 0 20.09c.78.11 1.423.74 1.423 1.528Z'
					mask='url(#a)'
				/>
				<path
					fill='#70DA55'
					d='M22.707 13.707a1 1 0 0 0 0-1.414l-6.364-6.364a1 1 0 1 0-1.414 1.414L20.586 13l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM2 14h20v-2H2v2Z'
				/>
			</svg>
		</Link>
	);
};

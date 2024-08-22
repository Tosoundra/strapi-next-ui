'use client';

import { AuthForm, Input } from '@shared/ui';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState, type FormEventHandler } from 'react';
import styles from './styles.module.scss';
import { toast } from 'react-toastify';

export const SignInForm: FC = () => {
	const [identifier, setIdentifier] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const router = useRouter();

	const loginHandler: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		const response = await signIn('credentials', {
			identifier,
			password,
			redirect: false,
			callbackUrl: '/organizations',
		});

		if (!response?.ok) {
			toast.error('Неверные почта или пароль');
			return;
		}

		if (rememberMe) {
			localStorage.setItem('remember', '1');
		}
		router.replace('/organizations');
	};

	return (
		<AuthForm onSubmit={loginHandler} label='Авторизация' submitLabel='Войти'>
			<Input
				common
				className={styles.input}
				value={identifier}
				onChange={(e) => setIdentifier(e.target.value)}
				type='email'
				name='identifier'
				id='identifier'
				placeholder='Email'
				pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
				required
			/>
			<Input
				common
				className={styles.input}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type='password'
				name='password'
				id='password'
				placeholder='Пароль'
				required
			/>
			<label htmlFor='rememberMe' className={styles.remember}>
				<input
					checked={rememberMe}
					onChange={(e) => setRememberMe(e.target.checked)}
					type='checkbox'
					name='rememberMe'
					id='rememberMe'
				/>
				<span>Запомнить меня</span>
			</label>
		</AuthForm>
	);
};

'use client';

import { AuthForm } from '@ui/index';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, type FormEventHandler } from 'react';
import styles from './styles.module.scss';

export const SignInForm = () => {
	const [error, setError] = useState('');

	const router = useRouter();

	const loginHandler: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const { identifier, password, rememberMe } = Object.fromEntries(formData);

		const user = await signIn('credentials', {
			identifier,
			password,
			rememberMe,
			redirect: false,
			callbackUrl: '/organizations',
		});
		if (!user?.ok) {
			setError(user?.error!);
			return;
		}
		router.replace('/organizations');
	};

	return (
		<AuthForm onSubmit={loginHandler} label='Авторизация' submitLabel='Войти'>
			<input className={styles.input} type='text' name='identifier' id='login' placeholder='Логин' required />
			<input className={styles.input} type='password' name='password' id='password' placeholder='Пароль' required />
			<label htmlFor='rememberMe' className={styles.remember}>
				<input type='checkbox' name='rememberMe' id='rememberMe' />
				<span>Запомнить меня</span>
			</label>
		</AuthForm>
	);
};

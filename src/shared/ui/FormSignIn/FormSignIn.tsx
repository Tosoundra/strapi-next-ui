'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, FormEvent } from 'react';
import { Button, Form } from '@ui/index';
import styles from './styles.module.scss';

export const FormSignIn: FC = () => {
	const router = useRouter();

	const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const response = await signIn('credentials', {
			identifier: formData.get('identifier'),
			password: formData.get('password'),
			redirect: false,
		});
		console.log(response);

		if (response?.ok) {
			router.push('/profile');
		}
	};

	return (
		<Form className={styles['sign-in']} label='Авторизация'>
			<fieldset className={styles.credentials}>
				<input className={styles.input} type='text' name='identifier' id='login' placeholder='Логин' />
				<input className={styles.input} type='text' name='password' id='password' placeholder='Пароль' />
				<label htmlFor='remember-me'>
					<input type='checkbox' name='remember-me' id='remember-me' />
					<span>Запомнить меня</span>
				</label>
				<Button className={styles.submit} type='submit'>
					Войти
				</Button>
			</fieldset>
		</Form>
	);
};

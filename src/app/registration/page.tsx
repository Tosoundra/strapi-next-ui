import { Form, Button, AuthForm } from '@ui/index';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Регистрация новой организации',
	description: 'Страница создания новой организации',
};

export default function Registration() {
	const registrationHandler = async () => {
		redirect('/application');
	};

	return (
		<section className={styles.registration}>
			<AuthForm label='Регистрация' submitLabel='Регистрация'>
				<input
					className={styles.input}
					type='text'
					name='organization_name'
					id='organization_name'
					placeholder='Название компании'
					required
				/>
				<input className={styles.input} type='text' name='phone' id='phone' placeholder='Телефон' required />
				<input className={styles.input} type='text' name='email' id='email' placeholder='Почта' required />
				<input className={styles.input} type='text' name='password' id='password' placeholder='Пароль' required />
			</AuthForm>
			<p>
				Есть аккаунт?{' '}
				<Link className={styles.link} href='/'>
					Авторизуйтесь
				</Link>
			</p>
		</section>
	);
}

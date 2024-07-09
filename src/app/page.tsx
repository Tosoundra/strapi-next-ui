import classNames from 'classnames';
import styles from './page.module.scss';
const cx = classNames.bind(styles);

export default function SignIn() {
	return (
		<form className={styles.form}>
			<div className={styles.container}>
				<legend className={styles.title}>Пожалуйста, авторизуйтесь</legend>
				<label htmlFor='login' className={styles.label}>
					<span>Логин</span>
					<input className={styles.input} type='text' name='login' id='login' placeholder='Введите логин' />
				</label>
				<label htmlFor='login' className={styles.label}>
					<span>Пароль</span>
					<input className={styles.input} type='text' name='password' id='password' placeholder='Введите пароль' />
				</label>
			</div>
		</form>
	);
}

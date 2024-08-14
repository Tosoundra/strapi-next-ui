import { api } from '@api/Api';
import { Input } from '@ui/index';
import styles from './styles.module.scss';

type Props = {
	params: { id: string; organizationId: string };
};

export default async function Edit({ params }: Props) {
	const user = await api.users.getUser(params.id);

	return (
		<table className={styles.container}>
			<tbody>
				<tr>
					<th className={styles.head}>Телефон</th>
					<td className={styles.body}>
						<Input className={styles.input} editable value={user.phone} type='text' name='username' id='username' />
					</td>
				</tr>
				<tr>
					<th className={styles.head}>E-mail</th>
					<td className={styles.body}>
						<Input className={styles.input} editable value={user.email} type='email' name='email' id='email' />
					</td>
				</tr>
				<tr>
					<th className={styles.head}>Пароль</th>
					<td className={styles.body}>
						<Input
							className={styles.input}
							hidable
							editable
							value='Иванов Иван Иванович'
							type='password'
							name='password'
							id='password'
						/>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

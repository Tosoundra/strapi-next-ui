import { Input } from '@ui/index';
import { ComponentProps, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
	phone: string;
	email: string;
	password: string;
	editable?: boolean;
	confirmable?: boolean;
	hidable?: boolean;
} & ComponentProps<'form'>;

export const EmployeeForm: FC<Props> = ({
	children,
	email,
	password,
	phone,
	hidable = false,
	editable = false,
	confirmable = false,
	...formProps
}) => {
	return (
		<form className={styles.container} id='employee-form' {...formProps}>
			{children}
			<fieldset>
				<span>Телефон</span>
				<Input
					className={styles.input}
					editable={editable}
					confirmable={confirmable}
					hidable={hidable}
					value={phone}
					type='text'
					name='phone'
					id='phone'
					required
				/>
			</fieldset>
			<fieldset>
				<span>E-mail</span>
				<Input
					className={styles.input}
					confirmable={confirmable}
					editable={editable}
					hidable={hidable}
					value={email}
					type='email'
					name='email'
					id='email'
					required
				/>
			</fieldset>
			<fieldset>
				<span>Пароль</span>
				<Input
					className={styles.input}
					hidable={hidable}
					editable={editable}
					confirmable={confirmable}
					value={password}
					type='password'
					name='password'
					id='password'
					required
				/>
			</fieldset>
		</form>
	);
};

'use client';

import { useMask } from '@react-input/mask';
import { Input } from '@shared/ui';
import { useParams } from 'next/navigation';
import { ComponentProps, FC, ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useFormState } from 'react-dom';

type Props = {
	children?: ReactNode;
	username: string;
	phone: string;
	email: string;
	password: string;
	editable?: boolean;
	confirmable?: boolean;
	hidable?: boolean;
} & ComponentProps<'form'>;

export const EmployeeForm: FC<Props> = ({
	children,
	username,
	email,
	password,
	phone,
	hidable = false,
	editable = false,
	confirmable = false,
	...formProps
}) => {
	const [usernameInputValue, setUsernameInputValue] = useState('');
	const [phoneInputValue, setPhoneInputValue] = useState('');
	const [emailInputValue, setEmailInputValue] = useState('');
	const [passwordInputValue, setPasswordInputValue] = useState('');
	const { organizationId } = useParams();
	const phoneInputRef = useMask({ mask: '+7(___)___-__-__', replacement: { _: /\d/ } });

	useEffect(() => {
		setUsernameInputValue(username);
		setPhoneInputValue(phone);
		setEmailInputValue(email);
		setPasswordInputValue(password);
	}, [username, phone, email, password]);

	return (
		<form className={styles.form} id='employee-form' {...formProps}>
			{children}
			<fieldset>
				<span>ФИО</span>
				<Input
					className={styles.input}
					editable={editable}
					confirmable={confirmable}
					value={usernameInputValue}
					onChange={(e) => setUsernameInputValue(e.target.value)}
					type='text'
					name='username'
					id='username'
					inputFieldType='name'
					required
				/>
			</fieldset>
			<fieldset>
				<span>Должность</span>
				<Input
					className={styles.input}
					editable={editable}
					confirmable={confirmable}
					value={usernameInputValue}
					onChange={(e) => setUsernameInputValue(e.target.value)}
					type='text'
					name='job_title'
					id='job_title'
					inputFieldType='name'
					required
				/>
			</fieldset>
			<fieldset>
				<span>Телефон</span>
				<Input
					className={styles.input}
					editable={editable}
					confirmable={confirmable}
					value={phoneInputValue}
					onChange={(e) => setPhoneInputValue(e.target.value)}
					type='tel'
					name='phone'
					id='phone'
					inputFieldType='phone'
					required
					ref={phoneInputRef}
				/>
			</fieldset>
			<fieldset>
				<span>E-mail</span>
				<Input
					className={styles.input}
					confirmable={confirmable}
					editable={editable}
					value={emailInputValue}
					onChange={(e) => setEmailInputValue(e.target.value)}
					type='email'
					name='email'
					id='email'
					inputFieldType='email'
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
					value={passwordInputValue}
					onChange={(e) => setPasswordInputValue(e.target.value)}
					type='password'
					name='password'
					id='password'
					required
				/>
			</fieldset>
			<input type='hidden' name='organization' value={organizationId} />
		</form>
	);
};

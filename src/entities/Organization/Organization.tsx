'use client';
import type { OrganizationType } from '@shared/lib/types';
import { AcceptButton, DeclineButton, Edit, Info, Input } from '@shared/ui';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';

type Props = {
	updateOrganizationHandler: (id: number, data: FormData) => void;
} & OrganizationType;

export const Organization: FC<Props> = ({ email, id, name, phone, updateOrganizationHandler }) => {
	const [isActive, setIsActive] = useState(false);
	const [nameValue, setNameValue] = useState('');
	const [phoneValue, setPhoneValue] = useState('');
	const [emailValue, setEmailValue] = useState('');

	useEffect(() => {
		setNameValue(name);
		setPhoneValue(phone);
		setEmailValue(email);
	}, [name, phone, email]);

	if (isActive) {
		return (
			<div className={styles.organization}>
				<form className={styles.form} action={(formData) => updateOrganizationHandler(id, formData)}>
					<Input
						common
						className={styles.input}
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={(e) => setNameValue(e.target.value)}
					/>
					<Input
						common
						className={styles.input}
						type='text'
						name='phone'
						id='phone'
						value={phoneValue}
						onChange={(e) => setPhoneValue(e.target.value)}
					/>
					<Input
						common
						className={styles.input}
						type='email'
						name='email'
						id='email'
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
					/>
					<div className={styles['actions-menu']}>
						<AcceptButton type='submit' />
						<DeclineButton onClick={() => setIsActive(false)} type='button' />
					</div>
				</form>
			</div>
		);
	}

	return (
		<div className={styles.organization}>
			<div className={styles['utils-container']}>
				<Info className={styles.info}>
					<p>Компания: {name}</p>
					<p>Телефон: {phone}</p>
					<p>Почта: {email}</p>
				</Info>
				<Edit type='button' onClick={() => setIsActive(true)} />
			</div>
			<Link href={`/organizations/${id}/employees/`} className={styles.label}>
				{name}
			</Link>
		</div>
	);
};

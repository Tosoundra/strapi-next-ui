'use client';
import { useMask } from '@react-input/mask';
import type { OrganizationWithId } from '@shared/lib/types';
import { AcceptButton, DeclineButton, Edit, Info, Input, Loader } from '@shared/ui';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, FormEventHandler, useActionState, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useFormStatus } from 'react-dom';
import { useSession } from 'next-auth/react';

type Props = {
	formAction: (formData: FormData, id: number) => Promise<void>;
	declineFormHandler?: () => void;
	initialActive?: boolean;
} & OrganizationWithId;

export const Organization: FC<Props> = ({
	email,
	id,
	name,
	phone,
	formAction,
	declineFormHandler,
	initialActive = false,
}) => {
	const [isActive, setIsActive] = useState(false);
	const [isPending, setIsPending] = useState(false);

	const [nameInputValue, setNameInputValue] = useState('');
	const [phoneInputValue, setPhoneInputValue] = useState('');
	const [emailInputValue, setEmailInputValue] = useState('');

	const session = useSession();

	const phoneInputRef = useMask({ mask: '+7(___)___-__-__', replacement: { _: /\d/ } });

	const onSubmitHandle: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		setIsPending(true);
		const formData = new FormData(event.currentTarget);
		await formAction(formData, id);
		setIsPending(false);
		setIsActive(false);
	};

	useEffect(() => {
		setIsActive(initialActive);
	}, [initialActive]);

	useEffect(() => {
		setNameInputValue(name);
		setPhoneInputValue(phone);
		setEmailInputValue(email);
	}, [name, phone, email]);

	if (isActive) {
		return (
			<div className={classNames(styles.organization, styles.active)}>
				<form className={styles.form} onSubmit={onSubmitHandle}>
					<Input
						common
						className={styles.input}
						type='text'
						name='name'
						id='name'
						value={nameInputValue}
						onChange={(e) => setNameInputValue(e.target.value)}
						placeholder='Наименование'
					/>
					<Input
						common
						className={styles.input}
						type='text'
						name='phone'
						id='phone'
						value={phoneInputValue}
						onChange={(e) => setPhoneInputValue(e.target.value)}
						placeholder='Телефон'
						ref={phoneInputRef}
					/>
					<Input
						common
						className={styles.input}
						type='email'
						name='email'
						id='email'
						value={emailInputValue}
						onChange={(e) => setEmailInputValue(e.target.value)}
						placeholder='Почта'
					/>
					{isPending ? (
						<Loader />
					) : (
						<div className={styles['actions-menu']}>
							<AcceptButton type='submit' />
							<DeclineButton
								onClick={() => (declineFormHandler ? declineFormHandler() : setIsActive(false))}
								type='reset'
							/>
						</div>
					)}
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
				<Edit isActive={!isActive} type='button' onClick={() => setIsActive(true)} />
			</div>
			<Link href={`/organization/${id}/employees/`} className={styles.label}>
				{name}
			</Link>
		</div>
	);
};

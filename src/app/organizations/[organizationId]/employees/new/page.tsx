import { EmployeeForm, Input } from '@ui/index';
import { FormEventHandler, FormHTMLAttributes, useState } from 'react';
import styles from './styles.module.scss';
import { api } from '@api/Api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type Props = {
	params: {
		organizationId: string;
	};
};

const addUserHandler = async (data: FormData) => {
	'use server';
	const { username, phone, email, password, organization } = Object.fromEntries(data);
	const registerData = {
		username,
		password,
		phone,
		email,
		organization: { id: Number(organization) },
	};

	const response = await api.auth.register(registerData);
	if (response.error) {
		return;
	}
	redirect(`/organizations/${organization}/employees`);
};

export default function NewEmployee({ params }: Props) {
	return (
		<EmployeeForm action={addUserHandler} email='' password='' phone='' confirmable>
			<fieldset>
				<span>Имя</span>
				<Input confirmable value='' type='text' name='username' id='username' required />
			</fieldset>
			<input type='hidden' name='organization' value={params.organizationId} />
		</EmployeeForm>
	);
}

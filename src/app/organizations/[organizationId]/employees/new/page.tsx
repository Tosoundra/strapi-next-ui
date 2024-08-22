import { EmployeeForm, Input } from '@shared/ui';
import { FormEventHandler, FormHTMLAttributes, useState } from 'react';
import styles from './styles.module.scss';
import { api } from '@shared/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { CreateNewEmployee } from '@features/ui';

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
	return <CreateNewEmployee />;
}

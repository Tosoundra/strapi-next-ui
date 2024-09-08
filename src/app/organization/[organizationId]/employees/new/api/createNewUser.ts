import { api } from '@shared/api';
import { RegisterUserData, UserStrapi } from '@shared/lib/types';
import { redirect } from 'next/navigation';

export const createNewUser = async (data: FormData, organizationId: string) => {
	'use server';
	const { username, phone, email, password } = Object.fromEntries(data);
	const registerData = {
		username,
		password,
		phone,
		email,
		organization: { id: Number(organizationId) },
	} as RegisterUserData;

	const response = await api.auth.register(registerData);

	if ('error' in response) {
		return;
	}

	redirect(`/organizations/${organizationId}/employees`);
};

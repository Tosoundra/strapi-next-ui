import { api } from '@shared/api';
import { UserStrapi } from '@shared/lib/types';
import { redirect } from 'next/navigation';

export const editUser = async (data: FormData, userId: string, organizationId: string) => {
	'use server';
	const { username, phone, email, password } = Object.fromEntries(data);
	const registerData = {
		username,
		phone,
		email,
	} as UserStrapi;

	const response = await api.users.updateUser(userId, registerData);
	if ('error' in response) {
		console.log(response);

		return;
	}
	redirect(`/organizations/${organizationId}/employees/`);
};

import { api } from '@shared/api';
import { redirect, RedirectType } from 'next/navigation';

export const createNewOrganizationHandle = async (formData: FormData) => {
	'use server';

	const response = api.organizations.createOrganization({
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		phone: formData.get('phone') as string,
	});

	if ('error' in response) {
		return;
	}

	redirect('/organizations', RedirectType.replace);
};

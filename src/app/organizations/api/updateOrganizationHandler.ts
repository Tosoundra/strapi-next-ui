import { api } from '@shared/api';
import { redirect, RedirectType } from 'next/navigation';

export const updateOrganizationHandler = async (formData: FormData, id: number) => {
	'use server';

	const { name, phone, email } = Object.fromEntries(formData);

	const nameValue = name.toString();
	const phoneValue = phone.toString();
	const emailValue = email.toString();

	if (!nameValue.length || !phoneValue.length || !emailValue.length) {
		return;
	}

	const response = await api.organizations.updateOrganization(String(id), {
		name: nameValue,
		phone: phoneValue,
		email: emailValue,
	});

	if ('error' in response) {
		return;
	}

	redirect('/organizations', RedirectType.replace);
};

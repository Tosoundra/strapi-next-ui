import { api } from '@shared/api';
import { EmployeeForm } from '@shared/ui';
import { editUser } from './api/editUser';

type Props = {
	params: { id: string; organizationId: string };
};

export default async function Edit({ params }: Props) {
	const handleFormSubmit = async (formData: FormData) => {
		'use server';
		await editUser(formData, params.id, params.organizationId);
	};

	const user = await api.users.getUser(params.id);

	return (
		<EmployeeForm
			action={handleFormSubmit}
			hidable
			editable
			username={user.username}
			email={user.email}
			password=''
			phone={user.phone}
		/>
	);
}

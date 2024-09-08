import { EmployeeForm } from '@shared/ui';
import { createNewUser } from './api/createNewUser';

type Props = {
	params: {
		organizationId: string;
	};
};

export default function NewEmployee({ params }: Props) {
	const handleFormSubmit = async (formData: FormData) => {
		'use server';
		await createNewUser(formData, params.organizationId);
	};

	return <EmployeeForm action={handleFormSubmit} email='' password='' phone='' username='' confirmable />;
}

import { api } from '@api/Api';
import { EmployeeForm, Input } from '@ui/index';
import styles from './styles.module.scss';

type Props = {
	params: { id: string; organizationId: string };
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


export default async function Edit({ params }: Props) {
	const user = await api.users.getUser(params.id);

	return <EmployeeForm  hidable editable email={user.email} password='1231231232' phone={user.username} />;
}

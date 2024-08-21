import { api } from '@shared/api';
import { AdminDashboardContainer, Edit, Info } from '@shared/ui';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Organization } from '@entities/index';

const getOrganizationsList = () => {
	return api.organizations.getOrganizations();
};

const updateOrganizationHandler = async (id: number, formData: FormData) => {
	'use server';

	const { name, phone, email } = Object.fromEntries(formData);
	const response = await api.organizations.updateOrganization(String(id), {
		name: formData.get('name') as string,
		phone: formData.get('phone') as string,
		email: formData.get('email') as string,
		id,
	});
};

export default async function Organizations() {
	const response = await getOrganizationsList();

	if ('error' in response) {
		return <h1>Ошибка при загрузке списка организаций</h1>;
	}

	return (
		<AdminDashboardContainer tabName='Клиенты' href='/register'>
			<ul className={styles.list}>
				{response.data.map((organization) => (
					<li key={organization.id}>
						<Organization
							email={organization.email}
							id={organization.id}
							name={organization.name}
							phone={organization.phone}
							updateOrganizationHandler={updateOrganizationHandler}
						/>
					</li>
				))}
			</ul>
		</AdminDashboardContainer>
	);
}

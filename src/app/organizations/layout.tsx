import { Organization } from '@entities/ui';
import { api } from '@shared/api';
import { AdminDashboardContainer, Loader } from '@shared/ui';
import { ReactNode, Suspense } from 'react';
import styles from './styles.module.scss';
import { updateOrganizationHandler } from './api/updateOrganizationHandler';
import { getSortedList } from '@shared/lib/utils';

type Props = {
	children: ReactNode;
};

const getOrganizationsList = () => {
	return api.organizations.getOrganizations();
};

export default async function OrganizationsLayout({ children }: Props) {
	const response = await getOrganizationsList();

	if ('error' in response) {
		return <h1>Ошибка при загрузке списка организаций</h1>;
	}

	const organizations = getSortedList(response.data!, 'name');

	return (
		<AdminDashboardContainer tabName='Клиенты' href='/organizations/new'>
			<ul className={styles.list}>
				<Suspense fallback={<Loader />}>{children}</Suspense>
				{organizations.map((organization) => (
					<li key={organization.id}>
						<Organization
							email={organization.email}
							id={organization.id}
							name={organization.name}
							phone={organization.phone}
							formAction={updateOrganizationHandler}
						/>
					</li>
				))}
			</ul>
		</AdminDashboardContainer>
	);
}

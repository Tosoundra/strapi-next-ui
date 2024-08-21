import { api } from '@shared/api';
import { AdminDashboardContainer, Button } from '@shared/ui';
import { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	params: { organizationId: string };
	children: ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { data: organization } = await api.organizations.getOrganization(`${params.organizationId}?fields[0]=name`);

	return {
		title: organization.name,
		description: `Список сотрудников компании ${organization.name}`,
	};
}

export default async function EmployeeLayout({ children, params }: Props) {
	const { users: employees } = (await api.organizations.getEmployees(params.organizationId)).data;

	return (
		<>
			<AdminDashboardContainer tabName='Сотрудники' href={`/organizations/${params.organizationId}/employees/new`}>
				<div className={styles.container}>
					<aside>
						<ul className={styles['employees-list']}>
							{employees.map(({ id, username }) => (
								<li className={styles.employee} key={id}>
									<Link href={`/organizations/${params.organizationId}/employees/${id}/edit`}>{username}</Link>
								</li>
							))}
						</ul>
					</aside>
					{children}
				</div>
			</AdminDashboardContainer>
			<div className={styles['actions-menu']}>
				<Link href='/organizations' className={styles.button}>
					Назад
				</Link>
				<Button className={styles.button} type='submit' form='employee-form'>
					Сохранить
				</Button>
			</div>
		</>
	);
}

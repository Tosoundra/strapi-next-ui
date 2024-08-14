import styles from './styles.module.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { api } from '@api/Api';
import { AdminDashboardContainer, Edit, Info } from '@ui/index';

const inter = Inter({ subsets: ['cyrillic'] });

const getOrganizationsList = () => {
	return api.organizations.getOrganizations();
};

export default async function Organizations() {
	const { data: organizations } = await getOrganizationsList();

	return (
		<AdminDashboardContainer tabName='Клиенты' href='/register'>
			<ul className={styles.list}>
				{organizations.map((organization) => (
					<li key={organization.id}>
						<div className={styles.organization}>
							<div className={styles['utils-container']}>
								<Info className={styles.info}>
									<p>Компания: {organization.name}</p>
									<p>Телефон: {organization.phone}</p>
									<p>Почта: {organization.email}</p>
								</Info>
								<Edit />
							</div>
							<Link href={`/organizations/${organization.id}/employees/`} className={styles.label}>
								{organization.name}
							</Link>
						</div>
					</li>
				))}
			</ul>
		</AdminDashboardContainer>
	);
}

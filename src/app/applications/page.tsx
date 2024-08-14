// import { authConfig } from '@config/auth';
import { Application } from '@ui/index';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import styles from './styles.module.scss';
import { api } from '@api/Api';

export const metadata: Metadata = {
	title: 'Заявки',
	description: 'Страница заявок',
};

export default async function Applications() {
	// const session = await getServerSession(authConfig);
	// const applications = await api.applications.getApplications();

	return (
		<>
			<h1 className={styles.title}>База заявок</h1>
			<h2 className={styles.subtitle}>
				База заявок Ronix – внутренний инструмент контроля задач и учёта статуса работы над входящими запросами.{' '}
			</h2>
			<ul className={styles['applications-list']}>
				<li>
					<Application
						id={1}
						status='В работе'
						topic='Does not work DB'
						username='peter'
						email='example@mail.com'
						reactionTime='12.07.1203'
						priority='Высокий'
						phone='+7123456789'
						expectedTime='05.07.2022'
						executor='steve'
						dateOfFailureDetection='01.01.2001'
						key={1}
						description='i do not know'
						discussion='kdfjksjdfs'
					/>
				</li>
			</ul>

			{/* <ul>
				{applications.map((application) => (
					<li key={application.id}>
						<Application />
					</li>
				))}
			</ul> */}
		</>
	);
}

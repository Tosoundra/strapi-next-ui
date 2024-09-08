'use client';

import { api } from '@shared/api';
import { UserWithIdStrapi } from '@shared/lib/types';
import { DeleteButton } from '@shared/ui';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';

type Props = {
	employees: UserWithIdStrapi[];
	organizationId: string;
};

export const EmployeesNavbar: FC<Props> = ({ employees, organizationId }) => {
	const { id } = useParams();
	const pageId = Number(id);
	const { data: session } = useSession();
	const router = useRouter();

	const showError = useCallback(() => {
		toast('Выберите пользователя', { type: 'error' });
	}, []);

	const deleteUserHandler = useCallback(
		async (id: number) => {
			await api.users.deleteUser(String(id), session?.jwt!);
			router.replace(`/organizations/${organizationId}/employees`);
			router.refresh();
		},
		[session, organizationId, router],
	);

	const onClickHandler = useCallback(
		async (employeeId: number) => {
			if (pageId === employeeId) {
				deleteUserHandler(employeeId);
			} else {
				showError();
			}
		},
		[pageId, deleteUserHandler, showError],
	);

	return (
		<nav className={styles['navigation-employees']}>
			<ul className={styles['employees-list']}>
				{employees.map(({ id, username }) => {
					return (
						<li className={styles.container} key={id}>
							<div className={classNames(styles.employee, id === pageId ? styles.active : '')}>
								<Link href={`/organization/${organizationId}/employees/${id}/edit`}>{username}</Link>
							</div>
							<DeleteButton onClick={() => onClickHandler(id)} isActive={id === pageId} />
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

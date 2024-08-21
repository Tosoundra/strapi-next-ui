'use client';

import { FC, ReactNode, useState } from 'react';
import styles from './styles.module.scss';
import { Chat, Button, Description } from '@shared/ui';
import Image from 'next/image';
import { GoToButton } from '@shared/ui/';
import { Info } from '@shared/ui/';
import { Files } from '@shared/ui/';
import { Comments } from '@shared/ui/';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const CREATE_APPLICATION_ROUTE = '/create-application';

enum Tabs {
	'description',
	'comments',
	'files',
	'discussion',
}

type Props = {
	id: number;
	children: ReactNode;
};

export const ApplicationForm: FC<Props> = ({ id, children }) => {
	const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.description);

	const pathname = usePathname();

	return (
		<div className={styles.application}>
			<span className={styles['application-id']}>Заявка {id}</span>
			<div className={styles.container}>
				{/* <div className={styles.info}>
					<Info />
					<div className={styles.tooltip}>Заказчик: {username}</div>
				</div> */}
				<ul className={classNames(styles.column, styles.head)}>
					<li>ID</li>
					<li>Статус</li>
					<li>ФИО</li>
					<li>Телефон</li>
					<li>E-mail</li>
					<li>Тема</li>
					<li>Дата обнаружения</li>
					<li>Приоритет</li>
					<li>Время реакции</li>
					<li>Ожидаемый срок</li>
					<li>Исполнитель</li>
					<li>Описание проблемы</li>
					<li>Дополнительные файлы</li>
					<li>Обсуждение</li>
				</ul>
				<ul className={styles.column}>
					<li>{id}</li>
					{children}
					<li>
						<GoToButton
							onClick={() => setCurrentTab(Tabs.description)}
							tabName='Описание проблемы'
							disabled={currentTab === Tabs.description}
						/>
					</li>
					<li>
						<GoToButton
							onClick={() => setCurrentTab(Tabs.files)}
							tabName='Дополнительные файлы'
							disabled={currentTab === Tabs.files}
						/>
					</li>
					<li>
						<GoToButton
							onClick={() => setCurrentTab(Tabs.discussion)}
							tabName='Обсуждение'
							disabled={currentTab === Tabs.discussion}
						/>
					</li>
				</ul>
				{currentTab === Tabs.description && <Description className={styles.form} id={1} />}
				{currentTab === Tabs.files && <Files className={styles.form} id={1} />}
				{currentTab === Tabs.discussion && <Chat className={styles.form} id={1} />}
			</div>
			<div className={styles['form-controls']}>
				<Button className={classNames(styles.button, styles.submit)} type='submit'>
					Сохранить
				</Button>
				{pathname === CREATE_APPLICATION_ROUTE && (
					<Link className={styles.return} href='/applications'>
						К списку заявок
					</Link>
				)}
				<Button className={classNames(styles.button, styles.reset)} type='reset'>
					Сбросить
				</Button>
			</div>
		</div>
	);
};

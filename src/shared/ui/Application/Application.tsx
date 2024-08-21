'use client';

import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { Chat, Button, Description } from '@ui/index';
import Image from 'next/image';
import { GoToButton } from '@ui/GoToButton/GoToButton';
import { Info } from '@ui/Info/Info';
import { Files } from '@ui/Files/Files';
import { Comments } from '@ui/Comments/Comments';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

enum Tabs {
	'description',
	'comments',
	'files',
	'discussion',
}

type Props = {
	id: number;
	status: 'В работе' | 'На рассмотрении' | 'Закрыта';
	phone: string;
	username: string;
	email: string;
	topic: string;
	dateOfFailureDetection: string;
	priority: 'Низкий' | 'Средний' | 'Высокий';
	reactionTime: string;
	expectedTime: string;
	executor: string;
	description: string;
	files?: File[];
	comments?: string[];
	discussion?: string;
};

export const Application: FC<Props> = ({
	id,
	comments,
	dateOfFailureDetection,
	description,
	discussion,
	email,
	executor,
	expectedTime,
	files,
	phone,
	priority,
	reactionTime,
	status,
	topic,
	username,
}) => {
	const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.description);
	const route = useRouter();
	const pathname = usePathname();
	const a = useSession();

	console.log(a);

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
					<li>Комментарии</li>
					<li>Обсуждение</li>
				</ul>
				<ul className={styles.column}>
					<li>{id}</li>
					<li>{status}</li>
					<li>{username}</li>
					<li>{phone}</li>
					<li>{email}</li>
					<li>{topic}</li>
					<li>{dateOfFailureDetection}</li>
					<li>{priority}</li>
					<li>{reactionTime}</li>
					<li>{expectedTime}</li>
					<li>{executor}</li>
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
							onClick={() => setCurrentTab(Tabs.comments)}
							tabName='Комментарии'
							disabled={currentTab === Tabs.comments}
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
				{pathname === 'create-application' && (
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

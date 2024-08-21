'use client';

import { Form, Message, SendButton } from '@shared/ui';
import styles from './styles.module.scss';
import { EventHandler, FC, FormEvent, useState } from 'react';

type Props = {
	description: string;
};

const USER = 2;

export const Description: FC<Props> = () => {
	const [textValue, setTextValue] = useState('');

	const [description, setDescription] = useState<[] | string[]>([]);
	const role = 2;

	const submitTextHandler = (event: FormEvent) => {
		event.preventDefault();
		if (!textValue.length) {
			return;
		}
		setDescription((value) => [...value, textValue]);
		setTextValue('');
	};

	return (
		<Form label='Описание проблемы'>
			<div className={styles.content}>
				<ul>
					{description.map((value, index) => (
						<li key={index}>
							<Message user='Клиент' time={new Date().toLocaleString('ru-RU')}>
								{value}
							</Message>
						</li>
					))}
				</ul>
			</div>
			{role === USER && (
				<div className={styles['send-message-block']}>
					<textarea
						onChange={(e) => setTextValue(e.target.value)}
						value={textValue}
						className={styles['message']}
						rows={1}
						name='chat'
						id='chat'
						spellCheck></textarea>
					<SendButton onClick={submitTextHandler} className={styles.submit} />
				</div>
			)}
		</Form>
	);
};

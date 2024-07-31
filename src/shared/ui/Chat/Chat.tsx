import { FC } from 'react';
import styles from './styles.module.scss';
import { Form, SendButton, Message } from '@ui/index';

type Props = {
	id: number;
	className: string;
};

const getMessages = (params) => {
	return;
};

export const Chat: FC<Props> = ({ id, className }) => {
	const messages = getMessages();

	return (
		<Form className={styles.chat} label='Обсуждение'>
			<div className={styles.content}>
				{/* <ul>
				{messages.map((message) => (
					<Message message={message.text} time='12.12.2016' user='Ronix' key={1} />
				))}
			</ul> */}
				{!messages && <p>Вы пока не вели диалог</p>}
			</div>
			<div className={styles['send-message-block']}>
				<textarea className={styles['message']} rows={1} name='chat' id='chat' spellCheck></textarea>
				<SendButton className={styles.submit} />
			</div>
		</Form>
	);
};

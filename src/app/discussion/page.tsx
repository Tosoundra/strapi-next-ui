import { Form, SendButton } from '@shared/ui';
import styles from './styles.module.scss';

const getMessages = () => {
	return;
};

export default function Discussion() {
	return (
		<Form label='Обсуждение'>
			<ul>
				<li></li>
			</ul>
			<div className={styles['send-message-block']}>
				<textarea className={styles['message']} cols={30} rows={1} name='chat' id='chat' spellCheck></textarea>
				<SendButton />
			</div>
		</Form>
	);
}

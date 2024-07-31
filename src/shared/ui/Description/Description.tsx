import { Form, Message, SendButton } from '@ui/index';
import styles from './styles.module.scss';

export const Description = () => {
	return (
		<Form label='Описание проблемы'>
			<div className={styles.content}>
				<ul>
					<li>
						<Message
							message='Добрый день! У нас регулярно наблюдаются проблемы с доступностью некоторых серверов, падает индекс доступности и они уходят в BUSY. Собрал nsd. Приходится регулярно перезагружать сервер. Прошу помочь с решением проблемы Эта проблема может возникать по самым различным причинам...Начиная от железа (или настроек виртуальной машины если используется), сетью и самим Домино.Нужно попробовать локализовать проблему:Когда она начала появляться?Что-нибудь изменялось в настройках серверов? Переустановка? Изменение конфигурации?'
							time='15:25, 04.07.2024'
							user='Клиент'
						/>
					</li>
				</ul>
			</div>
			{/* <div className={styles['send-message-block']}>
				<textarea className={styles['message']} rows={1} name='chat' id='chat' spellCheck></textarea>
				<SendButton className={styles.submit} />
			</div> */}
		</Form>
	);
};

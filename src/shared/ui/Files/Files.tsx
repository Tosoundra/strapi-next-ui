import { Button, Form, SendButton } from '@ui/index';
import styles from './styles.module.scss';
import Image from 'next/image';

export const Files = () => {
	return (
		<Form label='Дополнительные файлы'>
			<div className={styles.content}>
				<ul>
					<li>
						<div className={styles.file}>
							<Image width={24} height={24} src='/icons/FILES_ICON.svg' alt='Файл' />
							<span>Logs.zip</span>
							<Image className={styles.download} width={18} height={18} src='/icons/DOWNLOAD_ICON.svg' alt='Файл' />
						</div>
					</li>
				</ul>
			</div>
			<div className={styles['add-new-file-container']}>
				<Button className={styles.button}>
					<Image width={27} height={27} src='/icons/CREATE_APPLICATION_ICON.svg' alt='Добавить файл' />
				</Button>
			</div>
		</Form>
	);
};

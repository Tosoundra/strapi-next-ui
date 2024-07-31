import { Form } from '@ui/index';
import styles from './styles.module.scss'

export const Comments = () => {
	return (
		<Form label='Комментарии'>
			<div className={styles.content}></div>
			<div className={styles['add-new-file-container']}></div>
		</Form>
	);
};

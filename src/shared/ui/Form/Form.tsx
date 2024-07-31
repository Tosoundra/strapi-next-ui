import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
	label: string;
	children: ReactNode;
	className?: string;
};

export const Form: FC<Props> = ({ label, children, className }) => {
	return (
		<form className={classNames(styles.form, className)}>
			<div className={styles['label-container']}>
				<span>{label}</span>
			</div>
			<div className={styles.body}> {children}</div>
		</form>
	);
};

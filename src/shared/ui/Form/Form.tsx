'use client';

import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import type { FormProps, Tabs } from '@shared/lib/types/index';

export const Form: FC<FormProps> = ({ label, children, className, ...formProps }) => {
	return (
		<form {...formProps} className={classNames(styles.form, className)}>
			<div className={styles['label-container']}>
				<span>{label}</span>
			</div>
			<div className={styles.body}> {children}</div>
		</form>
	);
};

'use client';

import { Form, Button } from '@ui/index';
import { FC } from 'react';
import styles from './styles.module.scss';
import { FormProps } from '@lib/types';

type Props = {
	submitLabel: string;
} & FormProps;

export const AuthForm: FC<Props> = ({ label, children, submitLabel, ...formProps }) => {
	return (
		<Form {...formProps} className={styles['auth-form']} label={label}>
			<fieldset className={styles.credentials}>
				{children}
				<Button className={styles.submit} type='submit'>
					{submitLabel}
				</Button>
			</fieldset>
		</Form>
	);
};

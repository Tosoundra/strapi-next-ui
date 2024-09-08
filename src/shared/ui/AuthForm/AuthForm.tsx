'use client';

import { FormProps } from '@shared/lib/types';
import { Button, Form, Loader } from '@shared/ui';
import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
	submitLabel: string;
	isPending: boolean;
} & FormProps;

export const AuthForm: FC<Props> = ({ label, children, submitLabel, isPending, ...formProps }) => {
	return (
		<Form {...formProps} className={styles['auth-form']} label={label}>
			<fieldset className={styles.credentials}>
				{children}
				{isPending ? (
					<Loader className={styles['loader-auth']} />
				) : (
					<Button className={styles.submit} type='submit'>
						{submitLabel}
					</Button>
				)}
			</fieldset>
		</Form>
	);
};

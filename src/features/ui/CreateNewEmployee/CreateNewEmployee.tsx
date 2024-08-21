'use client';

import { EmployeeForm, Input } from '@shared/ui';
import { ComponentProps, FC, useState } from 'react';

export const CreateNewEmployee: FC<ComponentProps<'form'>> = ({ ...formProps }) => {
	const [username, setUsername] = useState('');

	return (
		<EmployeeForm {...formProps} email='' password='' phone='' confirmable>
			<fieldset>
				<span>Имя</span>
				<Input confirmable value='' type='text' name='username' id='username' required />
			</fieldset>
			<input type='hidden' name='organization' />
		</EmployeeForm>
	);
};

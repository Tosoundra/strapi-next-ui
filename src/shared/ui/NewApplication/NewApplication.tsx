'use client';

import { ApplicationForm } from '@ui/index';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';

const getApplicationId = () => {
	return Math.floor(Math.random() * 1000);
};

type Props = {
	id: number;
};

export const NewApplication: FC<Props> = ({ id }) => {
	const [priority, setPriority] = useState('Низкий');

	const pathname = usePathname();
	console.log(pathname);

	return (
		<ApplicationForm id={id}>
			<li>Заполняется</li>
			<li>
				<input type='text' value='Имя пользователя' readOnly />
			</li>
			<li>
				<input type='text' value='Имя пользователя' readOnly />
			</li>
			<li>
				<input type='text' value='Имя пользователя' readOnly />
			</li>
			<li>
				<input type='text' value='Имя пользователя' readOnly />
			</li>
			<li>
				<input type='text' value={new Date().toLocaleDateString('ru-RU')} readOnly />
			</li>
			<li>
				<select value={priority} name='priority' id='priority' onChange={(e) => setPriority(e.target.value)}>
					<option value='Низкий'>Низкий</option>
					<option value='Средний'>Средний</option>
					<option value='Высокий'>Высокий</option>
				</select>
			</li>
			<li>{priority}</li>
			<li>Ronix Systems</li>
		</ApplicationForm>
	);
};

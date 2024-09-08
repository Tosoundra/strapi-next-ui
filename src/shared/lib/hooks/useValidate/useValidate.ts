import { InputFieldType } from '@shared/lib/types';
import { HTMLInputTypeAttribute, useEffect, useState } from 'react';

const EMPTY_INPUT = 0;

const PHONE_PATTERN = '^(\\+7|7|8)?[-\\s]?(\\(?[489][0-9]{2}\\)?)?[-\\s]?[0-9]{3}[-\\s]?[0-9]{2}[-\\s]?[0-9]{2}$';
const EMAIL_PATTERN = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$';
const NAME_PATTERN = '^[А-Яа-яЁё]+(-[А-Яа-яЁё]+)?$';

export const useValidate = (isVisit: boolean, value: string, inputFieldType: InputFieldType) => {
	const [error, setError] = useState('');

	const validate = (value: string, pattern: string, errorMessage: string) => {
		if (!new RegExp(pattern).test(value)) {
			setError(errorMessage);
		} else {
			setError('');
		}
	};

	useEffect(() => {
		if (isVisit) {
			if (value.length === EMPTY_INPUT) {
				setError('Это обязательное поле');
			} else {
				switch (inputFieldType) {
					case 'name':
						validate(value, NAME_PATTERN, 'Допустимы только буквы кириллицы');
						break;
					case 'email':
						validate(value, EMAIL_PATTERN, 'Введите корректный Email: example@example.com');
						break;
					case 'phone':
						validate(value, PHONE_PATTERN, 'Допустимы только цифры');
						break;
					default:
						setError('');
				}
			}
		}
	}, [value, inputFieldType, isVisit]);

	return { error };
};

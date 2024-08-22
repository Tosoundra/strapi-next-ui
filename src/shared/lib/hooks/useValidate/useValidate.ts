import { HTMLInputTypeAttribute, useEffect, useState } from 'react';

const EMPTY_INPUT = 0

export const useValidate = (isVisit: boolean, value: string, pattern: string, type: HTMLInputTypeAttribute) => {
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
				switch (type) {
					case 'text':
						validate(value, pattern, 'Допустимы только буквы');

						break;

					case 'email':
						validate(value, pattern, 'Введите корректный Email: example@example.com');
						break;
					default:
						setError('');
				}
			}
		}
	}, [value, pattern, type, isVisit]);

	return { error };
};

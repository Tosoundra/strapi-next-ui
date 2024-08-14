'use client';
import { Confirmed, Edit, Show } from '@ui/index';
import classNames from 'classnames';
import { ChangeEventHandler, ComponentProps, FC, MouseEventHandler, useState } from 'react';
import styles from './styles.module.scss';

type Props = {
	editable?: boolean;
	hidable?: boolean;
	confirmable?: boolean;
	value: string;
} & ComponentProps<'input'>;

export const Input: FC<Props> = ({
	editable = false,
	hidable: hidable = false,

	confirmable = false,
	className,
	value,
	...inputProps
}) => {
	const [isEditActive, setIsEditActive] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const onClickEditHandler: MouseEventHandler<HTMLButtonElement> = () => {
		setIsEditActive(!isEditActive);
		setIsVisible(!isVisible);
	};

	if (confirmable) {
		return (
			<div className={classNames(styles.container)}>
				<Confirmed required />
				<input {...inputProps} className={classNames(styles.input, className)} type='text' defaultValue={value} />
			</div>
		);
	}

	return (
		<div className={classNames(styles.container, hidable && styles['offset-left'])}>
			{hidable && (
				<Show isVisible={isVisible} onClick={() => setIsVisible(!isVisible)} disabled={isEditActive} type='button' />
			)}
			{editable && <Edit onClick={onClickEditHandler} type='button' />}

			{hidable && !isVisible ? (
				<span>{value.replace(/./g, '*')}</span>
			) : isEditActive && editable ? (
				<input {...inputProps} className={classNames(styles.input, className)} type='text' defaultValue={value} />
			) : (
				<span>{value}</span>
			)}
		</div>
	);
};

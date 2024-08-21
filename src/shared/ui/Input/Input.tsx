'use client';
import { Confirmed, Edit, Show } from '@ui/index';
import classNames from 'classnames';
import { ComponentProps, FC, MouseEventHandler, useState } from 'react';
import styles from './styles.module.scss';

type Props = {
	editable?: boolean;
	hidable?: boolean;
	confirmable?: boolean;
	common?: boolean;
	value: string;
} & ComponentProps<'input'>;

export const Input: FC<Props> = ({
	editable = false,
	hidable = false,
	common = false,
	confirmable = false,
	className,
	value,
	...inputProps
}) => {
	const [isEditActive, setIsEditActive] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [error, setError] = useState('');

	const onClickEditHandler: MouseEventHandler<HTMLButtonElement> = () => {
		setIsEditActive(!isEditActive);
		setIsVisible(!isVisible);
	};

	if (confirmable) {
		return (
			<div className={classNames(styles.container)}>
				<Confirmed required />
				<input {...inputProps} className={classNames(styles.input, className)} type='text' defaultValue={value} />
				<span>{error}</span>
			</div>
		);
	}

	if (common) {
		return (
			<>
				<input className={classNames(styles.input, className)} {...inputProps} />
				<span>{error}</span>
			</>
		);
	}

	return (
		<div className={classNames(styles.container, hidable && styles['offset-left'])}>
			{hidable && (
				<Show isVisible={isVisible} onClick={() => setIsVisible(!isVisible)} disabled={isEditActive} type='button' />
			)}
			{editable && <Edit onClick={onClickEditHandler} type='button' />}

			{hidable && !isVisible ? (
				<input
					{...inputProps}
					className={classNames(styles.input, styles['hidden-border'], className)}
					type='password'
					defaultValue={value}
					readOnly
				/>
			) : isEditActive && editable ? (
				<>
					<input
						{...inputProps}
						className={classNames(styles.input, styles.active, className)}
						type='text'
						defaultValue={value}
					/>
					<span>{error}</span>
				</>
			) : (
				<input
					{...inputProps}
					className={classNames(styles.input, styles['hidden-border'], className)}
					type='text'
					readOnly
					defaultValue={value}
				/>
			)}
		</div>
	);
};

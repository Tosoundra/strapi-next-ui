'use client';
import { Confirmed, Edit, Show } from '@shared/ui';
import classNames from 'classnames';
import { ComponentProps, FC, MouseEventHandler, useState } from 'react';
import styles from './styles.module.scss';
import { useValidate } from '@shared/lib/hooks';

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
	const [isVisit, setIsVisit] = useState(false);
	const { error } = useValidate(isVisit, value, inputProps.pattern!, inputProps.type!);

	const onClickEditHandler: MouseEventHandler<HTMLButtonElement> = () => {
		setIsEditActive(!isEditActive);
		setIsVisible(!isVisible);
	};

	if (confirmable) {
		return (
			<div className={classNames(styles.container)}>
				<Confirmed required />
				<input
					onBlur={() => setIsVisit(true)}
					className={classNames(styles.input, className)}
					type='text'
					defaultValue={value}
					{...inputProps}
				/>
				<span className={styles.error}>{error}</span>
			</div>
		);
	}

	if (common) {
		return (
			<div>
				<input onBlur={() => setIsVisit(true)} className={classNames(styles.input, className)} {...inputProps} />
				<span className={styles.error}>{error}</span>
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
				<input
					className={classNames(styles.input, styles['hidden-border'], className)}
					type='password'
					defaultValue={value}
					readOnly
					{...inputProps}
				/>
			) : isEditActive && editable ? (
				<>
					<input
						onBlur={() => setIsVisit(true)}
						className={classNames(styles.input, styles.active, className)}
						type='text'
						defaultValue={value}
						{...inputProps}
					/>
					<span className={styles.error}>{error}</span>
				</>
			) : (
				<input
					className={classNames(styles.input, styles['hidden-border'], className)}
					type='text'
					readOnly
					defaultValue={value}
					{...inputProps}
				/>
			)}
		</div>
	);
};

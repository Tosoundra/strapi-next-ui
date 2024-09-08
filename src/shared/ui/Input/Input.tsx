'use client';
import { useValidate } from '@shared/lib/hooks';
import { InputFieldType } from '@shared/lib/types';
import { Confirmed, Edit, Show } from '@shared/ui';
import classNames from 'classnames';
import { ComponentProps, FC, forwardRef, MouseEventHandler, useState } from 'react';
import styles from './styles.module.scss';
import { Inter } from 'next/font/google';
import { toast } from 'react-toastify';

const EMPTY_INPUT = 0;
const inter = Inter({ subsets: ['cyrillic'] });

type ShowButtonProps = 'text' | 'password';

type Props = {
	editable?: boolean;
	hidable?: boolean;
	confirmable?: boolean;
	common?: boolean;
	isPassword?: boolean;
	inputFieldType?: InputFieldType;
} & ComponentProps<'input'>;

export const Input: FC<Props> = forwardRef(
	(
		{
			editable = false,
			hidable = false,
			common = false,
			confirmable = false,
			className,
			inputFieldType,
			type,
			...inputProps
		},
		ref,
	) => {
		const [isEditActive, setIsEditActive] = useState(false);
		const [isVisit, setIsVisit] = useState(false);
		const [isConfirmed, setIsConfirmed] = useState(false);
		const [isReadOnly, setIsReadOnly] = useState(inputProps.readOnly);
		const [currentInputType, setCurrentInputType] = useState(type);

		const { error } = useValidate(isVisit, inputProps.value as string, inputFieldType!);

		const togglePasswordVisibility = () => {
			setCurrentInputType(currentInputType === 'password' ? 'text' : 'password');
		};

		const toggleEditHandler: MouseEventHandler<HTMLButtonElement> = () => {
			setIsEditActive(true);
			setIsReadOnly(false);
			setCurrentInputType('text');
			setIsConfirmed(false);
		};

		const toggleConfirmedHandler = () => {
			if (inputProps.value?.toString().length === EMPTY_INPUT) {
				toast('Заполните поле', { type: 'error' });
				return;
			}
			setIsReadOnly(true);
			setIsConfirmed(true);
			setIsEditActive(false);
		};

		if (common) {
			return (
				<div className={styles['input-container']}>
					<input
						onBlur={() => setIsVisit(true)}
						className={classNames(styles.input, error ? styles['input-error'] : '', className, inter.className)}
						type={type}
						{...inputProps}
						ref={ref}
					/>
					<p className={styles.error}>{error}</p>
				</div>
			);
		}

		return (
			<div className={classNames(styles.container)}>
				{/* {hidable && (
						<Show
							isHidden={currentInputType === 'password'}
							onClick={togglePasswordVisibility}
							disabled={isEditActive}
							type='button'
						/>
					)} */}
				{isConfirmed ? (
					<Edit isActive={isEditActive} onClick={toggleEditHandler} type='button' />
				) : (
					<Confirmed
						onChange={toggleConfirmedHandler}
						isFilled={inputProps.value?.toString().length !== EMPTY_INPUT}
						checked={isConfirmed}
						required
					/>
				)}
				<input
					onBlur={() => setIsVisit(true)}
					className={classNames(
						styles.input,
						isReadOnly ? styles['hidden-border'] : '',
						error ? styles['input-error'] : '',
						className,
						inter.className,
					)}
					readOnly={isReadOnly}
					type={currentInputType}
					{...inputProps}
					ref={ref}
				/>
				<p className={styles.error}>{error}</p>
			</div>
		);
	},
);

Input.displayName = 'Input';
